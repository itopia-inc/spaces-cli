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
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/Laisky/graphql"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

const apiUrl = "https://api.spaces.itopia.com"

func mutate(command *cobra.Command, mutation interface{}, variables map[string]interface{}) {
	c := newApiClient(command)
	err := c.Mutate(
		context.Background(),
		mutation,
		variables,
	)
	if err != nil {
		log.Fatalf("API error: %v\n", err)
	}
}

func newApiClient(cmd *cobra.Command) *graphql.Client {
	token := readToken(cmd)
	client := graphql.NewClient(
		apiUrl,
		http.DefaultClient,
		graphql.WithHeader(
			"Authorization",
			fmt.Sprintf("Bearer %v", token),
		),
	)
	return client
}

func readToken(cmd *cobra.Command) string {
	token := viper.GetString("token")
	if token == "" {
		message := `Error: missing token - either run "spaces login" or set the "--token" flag`
		fmt.Println(message)
		cmd.Usage()
		fmt.Printf("\n%v\n", message)
		os.Exit(1)
	}
	// TODO: Add token validation?
	return token
}
