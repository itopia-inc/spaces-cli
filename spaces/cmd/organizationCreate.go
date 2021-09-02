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

	"github.com/machinebox/graphql"
	"github.com/mitchellh/mapstructure"
	"github.com/spf13/cobra"
)

var organizationCreateCmd = &cobra.Command{
	Use:   "create",
	Short: "Create a new organization",
	Long: `
Create a new organization
`,
	Run: func(cmd *cobra.Command, args []string) {
		token := readToken(cmd)
		request := graphql.NewRequest(`
			mutation ($name: String!) {
				organizationCreate (input: {
					name: $name
				}) {
					organization {
						id
					}
					problem {
						... on Problem {
							message
						}
					}
				}
			}
		`)
		request.Var("name", name)
		var response interface{}
		callApi(request, &response, token)
		var data struct {
			OrganizationCreate struct {
				Organization struct {
					Id string
				}
				Problem struct {
					Message string
				}
			}
		}
		err := mapstructure.Decode(response, &data)
		if err != nil {
			log.Fatalf("bad response: %v\n", response)
		}
		if data.OrganizationCreate.Problem.Message != "" {
			log.Fatalf("Your request has a problem: %v\n", data.OrganizationCreate.Problem.Message)
		}
		fmt.Printf("Your new organization is ready! ID=\"%v\"\n", data.OrganizationCreate.Organization.Id)
	},
}

func init() {
	organizationCmd.AddCommand(organizationCreateCmd)
	organizationCreateCmd.Flags().StringVarP(&name, "name", "n", "", "name for the new organization")
	organizationCreateCmd.MarkFlagRequired("name")
}
