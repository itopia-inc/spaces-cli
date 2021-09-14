# itopia Spaces CLI

An [oclif](https://oclif.io)-based CLI wrapper
for [the itopia Spaces API](https://api.spaces.itopia.com)

For more information about itopia Spaces,
see https://spaces.itopia.com

For more information about the itopia Spaces API,
see https://api.spaces.itopia.com

# TODO list

- Add `config` topic
  - `config:list`
  - `config:set`
  - `config:get-value`
  - `config:configurations:list/create/activate`?
- Add `image` topic and related commands
  - `image:create`
  - `image:read`
  - `image:update`
  - `image:delete`
  - `organization:list-images`
- Add end user management commands
  - `collection:add-user`
  - `collection:remove-user`
- Fork the command generator plugin
  - to fix the boolean flag bug, and
  - to support a custom base class
    - Add a `--json` flag
      - to switch to JSON-formatted output
        - (the default should be tabular)
    - Add a `--token` flag
- Add tests for generated commands
- Gracefully handle saved token expiration
- Per-command authentication via `--token`
- Improve usage workflow
  - Replace npm-library-based distribution automation with executable-based
  - Add README section for developer setup
  - Add README section for users who want to build from source
  - Improve README "Usage" section
- Licensing
- Open source

# Usage

<!-- The comment below is required for `npm run docsgen` -->
<!-- usage -->

```sh-session
$ npm install -g spaces
$ spaces COMMAND
running command...
$ spaces (-v|--version|version)
spaces/0.0.0 linux-x64 node-v14.17.5
$ spaces --help [COMMAND]
USAGE
  $ spaces COMMAND
...
```

<!-- usagestop -->
<!-- The comment above is required for `npm run docsgen` -->

# Commands

<!-- The comment below is required for `npm run docsgen` -->
<!-- commands -->

- [`spaces collection:delete`](#spaces-collectiondelete)
- [`spaces collection:list`](#spaces-collectionlist)
- [`spaces collection:list-spaces`](#spaces-collectionlist-spaces)
- [`spaces deployment:create`](#spaces-deploymentcreate)
- [`spaces deployment:delete`](#spaces-deploymentdelete)
- [`spaces deployment:list`](#spaces-deploymentlist)
- [`spaces deployment:list-collections`](#spaces-deploymentlist-collections)
- [`spaces deployment:list-spaces`](#spaces-deploymentlist-spaces)
- [`spaces deployment:update`](#spaces-deploymentupdate)
- [`spaces help [COMMAND]`](#spaces-help-command)
- [`spaces login`](#spaces-login)
- [`spaces logout`](#spaces-logout)
- [`spaces organization:add-admin`](#spaces-organizationadd-admin)
- [`spaces organization:create`](#spaces-organizationcreate)
- [`spaces organization:delete`](#spaces-organizationdelete)
- [`spaces organization:list`](#spaces-organizationlist)
- [`spaces organization:list-collections`](#spaces-organizationlist-collections)
- [`spaces organization:list-deployments`](#spaces-organizationlist-deployments)
- [`spaces organization:list-spaces`](#spaces-organizationlist-spaces)
- [`spaces organization:remove-admin`](#spaces-organizationremove-admin)
- [`spaces organization:update`](#spaces-organizationupdate)
- [`spaces space:delete`](#spaces-spacedelete)
- [`spaces space:list`](#spaces-spacelist)

## `spaces collection:delete`

Delete a collection

```
USAGE
  $ spaces collection:delete

OPTIONS
  -h, --help                   show CLI help
  --collectionId=collectionId  (required)
  --deploymentId=deploymentId  (required)

EXAMPLE
  spaces collection:delete --collectionId='abc123CollectionID' --deploymentId='abc123DeploymentID'
```

_See code: [src/commands/collection/delete.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/collection/delete.ts)_

## `spaces collection:list`

List all of your collections

```
USAGE
  $ spaces collection:list

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  spaces collection:list
```

_See code: [src/commands/collection/list.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/collection/list.ts)_

## `spaces collection:list-spaces`

List all spaces in a collection

```
USAGE
  $ spaces collection:list-spaces

OPTIONS
  -h, --help                   show CLI help
  --deploymentId=deploymentId  (required)
  --id=id                      (required)

EXAMPLE
  spaces collection:list-spaces --id='abc123CollectionID' --deploymentId='abc123DeploymentID'
```

_See code: [src/commands/collection/list-spaces.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/collection/list-spaces.ts)_

## `spaces deployment:create`

Create a new deployment

```
USAGE
  $ spaces deployment:create

OPTIONS
  -h, --help                                                     show CLI help
  --isGoogleIdentityProviderEnabled                              (required)
  --managedStorageSizeInGigabytes=managedStorageSizeInGigabytes  (required)
  --managedStorageTier=managedStorageTier                        (required)
  --name=name                                                    (required)
  --organizationId=organizationId                                (required)
  --region=region                                                (required)

EXAMPLE
  spaces deployment:create --name='My Deployment' --organizationId='abc123OrganizationID'
```

_See code: [src/commands/deployment/create.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/deployment/create.ts)_

## `spaces deployment:delete`

Delete a deployment

```
USAGE
  $ spaces deployment:delete

OPTIONS
  -h, --help                       show CLI help
  --id=id                          (required)
  --organizationId=organizationId  (required)

EXAMPLE
  spaces deployment:delete --id='abc123DeploymentID' --organizationId='abc123OrganizationID'
```

_See code: [src/commands/deployment/delete.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/deployment/delete.ts)_

## `spaces deployment:list`

List all of your deployments

```
USAGE
  $ spaces deployment:list

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  spaces deployment:list
```

_See code: [src/commands/deployment/list.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/deployment/list.ts)_

## `spaces deployment:list-collections`

List all collections in a deployment

```
USAGE
  $ spaces deployment:list-collections

OPTIONS
  -h, --help                       show CLI help
  --id=id                          (required)
  --organizationId=organizationId  (required)

EXAMPLE
  spaces deployment:list-collections --id='abc123DeploymentID' --organizationId='abc123organizationionid'
```

_See code: [src/commands/deployment/list-collections.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/deployment/list-collections.ts)_

## `spaces deployment:list-spaces`

List all spaces in a deployment

```
USAGE
  $ spaces deployment:list-spaces

OPTIONS
  -h, --help                       show CLI help
  --id=id                          (required)
  --organizationId=organizationId  (required)

EXAMPLE
  spaces deployment:list-spaces --id='abc123DeploymentID' --organizationId='abc123organizationionid'
```

_See code: [src/commands/deployment/list-spaces.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/deployment/list-spaces.ts)_

## `spaces deployment:update`

Update one or more of a deployment's properties

```
USAGE
  $ spaces deployment:update

OPTIONS
  -h, --help                                                     show CLI help
  --id=id                                                        (required)
  --isGoogleIdentityProviderEnabled                              (required)
  --managedStorageSizeInGigabytes=managedStorageSizeInGigabytes  (required)
  --name=name                                                    (required)
  --organizationId=organizationId                                (required)

EXAMPLE
  spaces deployment:update --id='abc123OrganizationID' --isGoogleIdentityProviderEnabled
  --managedStorageSizeInGigabytes='200' --name='My Deployment'
```

_See code: [src/commands/deployment/update.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/deployment/update.ts)_

## `spaces help [COMMAND]`

display help for spaces

```
USAGE
  $ spaces help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `spaces login`

Generate & save an authentication token

```
USAGE
  $ spaces login

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/login.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/login.ts)_

## `spaces logout`

Clear the saved authentication token

```
USAGE
  $ spaces logout

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/logout.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/logout.ts)_

## `spaces organization:add-admin`

Add someone to an organization's list of administrators

```
USAGE
  $ spaces organization:add-admin

OPTIONS
  -h, --help     show CLI help
  --email=email  (required)
  --id=id        (required)

EXAMPLE
  spaces organization:add-admin --email='someone@example.com' --id='abc123OrganizationID'
```

_See code: [src/commands/organization/add-admin.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/organization/add-admin.ts)_

## `spaces organization:create`

Create a new organization

```
USAGE
  $ spaces organization:create

OPTIONS
  -h, --help   show CLI help
  --name=name  (required)

EXAMPLE
  spaces organization:create --name='My Organization'
```

_See code: [src/commands/organization/create.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/organization/create.ts)_

## `spaces organization:delete`

Delete an organization

```
USAGE
  $ spaces organization:delete

OPTIONS
  -h, --help  show CLI help
  --id=id     (required)

EXAMPLE
  spaces organization:delete --id='abc123OrganizationID'
```

_See code: [src/commands/organization/delete.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/organization/delete.ts)_

## `spaces organization:list`

List all of your organizations

```
USAGE
  $ spaces organization:list

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  spaces organization:list
```

_See code: [src/commands/organization/list.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/organization/list.ts)_

## `spaces organization:list-collections`

List all collections in an organization

```
USAGE
  $ spaces organization:list-collections

OPTIONS
  -h, --help  show CLI help
  --id=id     (required)

EXAMPLE
  spaces organization:list-collections --id='abc123organizationionid'
```

_See code: [src/commands/organization/list-collections.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/organization/list-collections.ts)_

## `spaces organization:list-deployments`

List all deployments in an organization

```
USAGE
  $ spaces organization:list-deployments

OPTIONS
  -h, --help  show CLI help
  --id=id     (required)

EXAMPLE
  spaces organization:list-deployments --id='abc123organizationionid'
```

_See code: [src/commands/organization/list-deployments.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/organization/list-deployments.ts)_

## `spaces organization:list-spaces`

List all spaces in an organization

```
USAGE
  $ spaces organization:list-spaces

OPTIONS
  -h, --help  show CLI help
  --id=id     (required)

EXAMPLE
  spaces organization:list-spaces --id='abc123organizationionid'
```

_See code: [src/commands/organization/list-spaces.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/organization/list-spaces.ts)_

## `spaces organization:remove-admin`

Remove someone from an organization's list of administrators

```
USAGE
  $ spaces organization:remove-admin

OPTIONS
  -h, --help     show CLI help
  --email=email  (required)
  --id=id        (required)

EXAMPLE
  spaces organization:remove-admin --email='someone@example.com' --id='abc123OrganizationID'
```

_See code: [src/commands/organization/remove-admin.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/organization/remove-admin.ts)_

## `spaces organization:update`

Update an organization's name

```
USAGE
  $ spaces organization:update

OPTIONS
  -h, --help   show CLI help
  --id=id      (required)
  --name=name  (required)

EXAMPLE
  spaces organization:update --id='abc123OrganizationID' --name='My Organization'
```

_See code: [src/commands/organization/update.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/organization/update.ts)_

## `spaces space:delete`

Delete a space

```
USAGE
  $ spaces space:delete

OPTIONS
  -h, --help                   show CLI help
  --collectionId=collectionId  (required)
  --deploymentId=deploymentId  (required)
  --forceShutDownAllSessions
  --spaceId=spaceId            (required)

EXAMPLE
  spaces space:delete --collectionId='abc123CollectionID' --deploymentId='abc123DeploymentID' --forceShutDownAllSessions
  --spaceId='abc123SpaceID'
```

_See code: [src/commands/space/delete.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/space/delete.ts)_

## `spaces space:list`

List all of your spaces

```
USAGE
  $ spaces space:list

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  spaces space:list
```

_See code: [src/commands/space/list.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/space/list.ts)_

<!-- commandsstop -->
<!-- The comment above is required for `npm run docsgen` -->
