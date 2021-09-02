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

var deploymentCreateCmd = &cobra.Command{
	Use:   "create",
	Short: "Create a new deployment",
	Long: `
Create a new deployment
`,
	Run: func(cmd *cobra.Command, args []string) {
		token := readToken(cmd)
		// TODO: Add missing required fields to input.
		request := graphql.NewRequest(`
			mutation ($name: String!, $organizationId: ID!) {
				deploymentCreate (input: {
					name: $name
					organizationId: $organizationId
				}) {
					deployment {
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
		request.Var("organizationId", organizationId)
		var response interface{}
		callApi(request, &response, token)
		var data struct {
			DeploymentCreate struct {
				Deployment struct {
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
		if data.DeploymentCreate.Problem.Message != "" {
			log.Fatalf("Your request has a problem: %v\n", data.DeploymentCreate.Problem.Message)
		}
		fmt.Printf("Your new deployment is ready! ID=\"%v\"\n", data.DeploymentCreate.Deployment.Id)
	},
}

func init() {
	deploymentCmd.AddCommand(deploymentCreateCmd)
	deploymentCreateCmd.Flags().StringVarP(&name, "name", "n", "", "name for the new deployment")
	deploymentCreateCmd.Flags().StringVarP(&organizationId, "organizationId", "o", "", "ID of the containing organization")
	deploymentCreateCmd.MarkFlagRequired("name")
	deploymentCreateCmd.MarkFlagRequired("organizationId")
}
