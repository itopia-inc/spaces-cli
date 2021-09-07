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
	"log"

	"github.com/Laisky/graphql"
	"github.com/spf13/cobra"
)

var organizationCreate = &cobra.Command{
	Use:   "create",
	Short: "Create a new organization",
	Long: `
Create a new organization
`,
	Run: func(c *cobra.Command, args []string) {
		var mutation struct {
			OrganizationCreate struct {
				Organization struct {
					Id graphql.String
				}
				Problem struct {
					Problem struct {
						Message graphql.String
					} `graphql:"... on Problem"`
				}
			} `graphql:"organizationCreate(input: {name: $name})"`
		}
		variables := map[string]interface{}{
			"name": graphql.String(name),
		}
		mutate(c, &mutation, variables)
		if mutation.OrganizationCreate.Problem.Problem.Message != "" {
			log.Fatalf(
				"API problem: %v\n",
				mutation.OrganizationCreate.Problem.Problem.Message,
			)
		}
		fmt.Printf(
			"Your new organization is ready!\nID=\"%v\"\n",
			mutation.OrganizationCreate.Organization.Id,
		)
	},
}

func init() {
	organization.AddCommand(organizationCreate)
	organizationCreate.Flags().StringVarP(&name, "name", "n", "", "name for the new organization")
	organizationCreate.MarkFlagRequired("name")
}
