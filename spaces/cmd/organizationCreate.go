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
)

var organizationCreateCmd = &cobra.Command{
	Use:   "create",
	Short: "Create a new organization",
	Long: `
Create a new organization
`,
	Run: func(cmd *cobra.Command, args []string) {
		// TODO: Implement this API call.
		fmt.Println("Your new organization is ready! (Not really.)")
	},
}

func init() {
	organizationCmd.AddCommand(organizationCreateCmd)
	organizationCreateCmd.Flags().StringP("name", "n", "", "name for the new organization")
	organizationCreateCmd.MarkFlagRequired("name")
}
