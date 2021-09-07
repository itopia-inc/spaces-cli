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
	"os"
	"path"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var cfgFile string
var token string

var rootCmd = &cobra.Command{
	Use:   "spaces",
	Short: "A CLI wrapper for the itopia Spaces API",
	Long: `
spaces is the officially-supported CLI that makes it
easier to use the itopia Spaces API inside a terminal.

For more information about itopia Spaces,
see https://spaces.itopia.com

For more information about the itopia Spaces API,
see https://api.spaces.itopia.com`,
}

func Execute() {
	cobra.CheckErr(rootCmd.Execute())
}

func init() {
	cobra.OnInitialize(initConfig)
	// TODO: Consider re-enabling this completion feature in the future.
	rootCmd.CompletionOptions.DisableDefaultCmd = true
	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "configuration file path (default is $HOME/.spaces.yaml)")
	rootCmd.PersistentFlags().StringVar(&token, "token", "", "authentication token for the itopia Spaces API")
	viper.BindPFlag("token", rootCmd.PersistentFlags().Lookup("token"))
}

func initConfig() {
	if cfgFile != "" {
		viper.SetConfigFile(cfgFile)
	} else {
		home, err := os.UserHomeDir()
		cobra.CheckErr(err)
		viper.SetConfigFile(path.Join(home, ".spaces.yaml"))
	}
	viper.SetDefault("token", "")
	viper.AutomaticEnv()
	if err := viper.ReadInConfig(); err == nil {
		fmt.Fprintln(os.Stderr, "Using config file:", viper.ConfigFileUsed())
	}
	viper.SafeWriteConfig()
}
