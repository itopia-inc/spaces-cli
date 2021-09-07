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
	"fmt"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var logoutCmd = &cobra.Command{
	Use:   "logout",
	Short: "Clear authentication token from configuration file",
	Long: `
Clear authentication token from configuration file
`,
	Run: func(cmd *cobra.Command, args []string) {
		viper.Set("token", "")
		viper.WriteConfig()
		fmt.Printf(`
Success!
Authentication token cleared from configuration file.
See configuration file here: %v

Future requests will be unauthenticated by default.

`, viper.GetViper().ConfigFileUsed())
	},
}

func init() {
	rootCmd.AddCommand(logoutCmd)
}
