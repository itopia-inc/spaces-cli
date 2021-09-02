/*
Copyright © 2021 Itopia, Inc. <JVanBruggen@itopia.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package cmd

import (
	"errors"
	"fmt"
	"os"

	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var loginCmd = &cobra.Command{
	Use:   "login",
	Short: "Generate an authentication token & save it to configuration file",
	Long: `
Generate an authentication token & save it to configuration file
`,
	Run: func(cmd *cobra.Command, args []string) {
		// TODO: When the token generator is ready, add its URL here.
		fmt.Printf(`
Sign in to itopia Spaces here: https://not.really.test

After signing in, copy/paste the generated authentication token into the prompt below.
`)
		token := promptForToken()
		viper.Set("token", token)
		viper.WriteConfig()
		fmt.Printf(`
Success!
Authentication token saved to configuration file.
See configuration file here: %v

Future requests will be authenticated by default.

`, viper.GetViper().ConfigFileUsed())
	},
}

func promptForToken() string {
	prompt := promptui.Prompt{
		Label: "Token:",
		Validate: func(input string) error {
			if len(input) <= 0 {
				return errors.New("empty token is invalid")
			}
			return nil
		},
	}
	result, err := prompt.Run()
	if err != nil {
		fmt.Printf("Token prompt failed: %v\n", err)
		os.Exit(1)
	}
	return result
}

func init() {
	rootCmd.AddCommand(loginCmd)
}
