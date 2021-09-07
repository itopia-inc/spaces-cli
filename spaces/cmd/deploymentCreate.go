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

var deploymentCreateCmd = &cobra.Command{
	Use:   "create",
	Short: "Create a new deployment",
	Long: `
Create a new deployment
`,
	Run: func(c *cobra.Command, args []string) {
		var mutation struct {
			DeploymentCreate struct {
				DeploymentId graphql.String
				Problem      struct {
					Problem struct {
						Message graphql.String
					} `graphql:"... on Problem"`
				}
			} `graphql:"deploymentCreate(input: {isGoogleIdentityProviderEnabled: $isGoogleIdentityProviderEnabled, managedStorageSizeInGigabytes: $managedStorageSizeInGigabytes, managedStorageTier: $managedStorageTier, name: $name, organizationId: $organizationId, region: $region})"`
		}
		variables := map[string]interface{}{
			"isGoogleIdentityProviderEnabled": graphql.Boolean(enableGoogleSSO),
			"managedStorageSizeInGigabytes":   graphql.Int(storageSize),
			// TODO: Somehow mark this as a ManagedStorageTier (instead of a String)
			// TODO: Expose this variable to the CLI
			"managedStorageTier": ManagedStorageTierStandard,
			"name":               graphql.String(name),
			"organizationId":     graphql.String(organizationId),
			// TODO: Expose this variable to the CLI
			"region": graphql.String("us-central1"),
		}
		mutate(c, &mutation, variables)
		if mutation.DeploymentCreate.Problem.Problem.Message != "" {
			log.Fatalf(
				"API problem: %v\n",
				mutation.DeploymentCreate.Problem.Problem.Message,
			)
		}
		fmt.Printf(
			"Your new deployment is ready!\nID=\"%v\"\n",
			mutation.DeploymentCreate.DeploymentId,
		)
	},
}

func init() {
	deploymentCmd.AddCommand(deploymentCreateCmd)
	deploymentCreateCmd.Flags().BoolVarP(&enableGoogleSSO, "enableGoogleSSO", "g", false, "allow end users to use Google for single sign-on")
	deploymentCreateCmd.Flags().StringVarP(&name, "name", "n", "", "name for the new deployment")
	deploymentCreateCmd.Flags().StringVarP(&organizationId, "organizationId", "o", "", "ID of the containing organization")
	deploymentCreateCmd.Flags().IntVarP(&storageSize, "storageSize", "s", 10, "amount of storage available (in GB)")
	deploymentCreateCmd.MarkFlagRequired("name")
	deploymentCreateCmd.MarkFlagRequired("organizationId")
}
