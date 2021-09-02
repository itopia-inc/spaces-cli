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

	"github.com/machinebox/graphql"
)

var apiClient = graphql.NewClient("https://api.spaces.itopia.com")

func callApi(request *graphql.Request, response *interface{}, token string) {
	ctx := context.Background()
	request.Header.Set("Authorization", fmt.Sprintf("Bearer: %v", token))
	request.Header.Set("Cache-Control", "no-cache")
	if err := apiClient.Run(ctx, request, &response); err != nil {
		log.Fatal(err)
	}
}