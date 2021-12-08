# itopia Spaces CLI

An [oclif](https://oclif.io)-based CLI wrapper
for [the itopia Spaces API](https://api.spaces.itopia.com)

For more information about itopia Spaces,
see https://spaces.itopia.com

For more information about the itopia Spaces API,
see https://api.spaces.itopia.com

# Usage

1. Download a pre-built executable for your OS, attached to
   [the latest release](https://github.com/itopia-inc/spaces-cli/releases/tag/v0.2.0).
1. Save it with the name `spaces` in a convenient directory.
1. Run `spaces help` and much more!

# Feedback

Questions? Requests?
[Please let us know on GitHub!](https://github.com/itopia-inc/spaces-cli/issues)

# Build from source

If you'd prefer to build your executable from source,
first ensure that you have Node.js v14 and npm v7+ installed.
Then, clone this repo and run the following commands inside it:

```sh
$ npm install
$ npm run build
```

You should find freshly-built executables for Linux/MacOS/Windows
in the repo's `/dist/` directory.

# Commands

The following documentation is automatically generated.
While the examples should be accurate,
the "See code" hyperlinks do not work.

<!-- The comment below is required for `npm run docsgen` -->
<!-- commands -->

- [`spaces collection:add-end-user`](#spaces-collectionadd-end-user)
- [`spaces collection:delete`](#spaces-collectiondelete)
- [`spaces collection:list`](#spaces-collectionlist)
- [`spaces collection:list-spaces`](#spaces-collectionlist-spaces)
- [`spaces collection:read`](#spaces-collectionread)
- [`spaces collection:remove-end-user`](#spaces-collectionremove-end-user)
- [`spaces deployment:create`](#spaces-deploymentcreate)
- [`spaces deployment:delete`](#spaces-deploymentdelete)
- [`spaces deployment:list`](#spaces-deploymentlist)
- [`spaces deployment:list-collections`](#spaces-deploymentlist-collections)
- [`spaces deployment:list-spaces`](#spaces-deploymentlist-spaces)
- [`spaces deployment:read`](#spaces-deploymentread)
- [`spaces deployment:update`](#spaces-deploymentupdate)
- [`spaces help [COMMAND]`](#spaces-help-command)
- [`spaces image:create`](#spaces-imagecreate)
- [`spaces image:delete`](#spaces-imagedelete)
- [`spaces image:list`](#spaces-imagelist)
- [`spaces image:read`](#spaces-imageread)
- [`spaces image:update`](#spaces-imageupdate)
- [`spaces login`](#spaces-login)
- [`spaces logout`](#spaces-logout)
- [`spaces organization:add-admin`](#spaces-organizationadd-admin)
- [`spaces organization:delete`](#spaces-organizationdelete)
- [`spaces organization:list`](#spaces-organizationlist)
- [`spaces organization:list-collections`](#spaces-organizationlist-collections)
- [`spaces organization:list-deployments`](#spaces-organizationlist-deployments)
- [`spaces organization:list-spaces`](#spaces-organizationlist-spaces)
- [`spaces organization:read`](#spaces-organizationread)
- [`spaces organization:remove-admin`](#spaces-organizationremove-admin)
- [`spaces organization:update`](#spaces-organizationupdate)
- [`spaces space:delete`](#spaces-spacedelete)
- [`spaces space:list`](#spaces-spacelist)
- [`spaces space:read`](#spaces-spaceread)

## `spaces collection:add-end-user`

Add an end user to a collection (this grants permission to use the collection's spaces)

```
USAGE
  $ spaces collection:add-end-user

OPTIONS
  -h, --help                   show CLI help
  --collectionId=collectionId  (required)
  --deploymentId=deploymentId  (required)
  --email=email                (required)
  --notify                     (required)

EXAMPLE
  spaces collection:end-user-add --id='abc123CollectionID' --deploymentId='abc123DeploymentID'
  --emailAddress='developer@example.com' --notify
```

_See code: [src/commands/collection/add-end-user.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/collection/add-end-user.ts)_

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

_See code: [src/commands/collection/delete.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/collection/delete.ts)_

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

_See code: [src/commands/collection/list.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/collection/list.ts)_

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

_See code: [src/commands/collection/list-spaces.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/collection/list-spaces.ts)_

## `spaces collection:read`

Read all properties of a collection

```
USAGE
  $ spaces collection:read

OPTIONS
  -h, --help                   show CLI help
  --deploymentId=deploymentId  (required)
  --id=id                      (required)

EXAMPLE
  spaces collection:read --id='abc123CollectionID' --deploymentId='abc123DeploymentID'
```

_See code: [src/commands/collection/read.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/collection/read.ts)_

## `spaces collection:remove-end-user`

Remove an end user from a collection (this revokes permission to use the collection's spaces)

```
USAGE
  $ spaces collection:remove-end-user

OPTIONS
  -h, --help                   show CLI help
  --deploymentId=deploymentId  (required)
  --email=email                (required)
  --id=id                      (required)

EXAMPLE
  spaces collection:remove-end-user --id='abc123CollectionID' --deploymentId='abc123DeploymentID'
  --emailAddress='developer@example.com'
```

_See code: [src/commands/collection/remove-end-user.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/collection/remove-end-user.ts)_

## `spaces collection:remove-end-user`

Remove an end user from a collection (this revokes permission to use the collection's spaces)

```
USAGE
  $ spaces collection:remove-end-user

OPTIONS
  -h, --help                   show CLI help
  --deploymentId=deploymentId  (required)
  --email=email                (required)
  --id=id                      (required)

EXAMPLE
  spaces collection:remove-end-user --id='abc123CollectionID' --deploymentId='abc123DeploymentID'
  --emailAddress='developer@example.com'
```

_See code: [src/commands/collection/remove-end-user.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/collection/remove-end-user.ts)_

## `spaces deployment:create`

Create a new deployment

```
USAGE
  $ spaces deployment:create

OPTIONS
  -h, --help                         show CLI help
  --isGoogleIdentityProviderEnabled  (required)
  --name=name                        (required)
  --organizationId=organizationId    (required)
  --region=region                    (required)

EXAMPLE
  spaces deployment:create --name='My Deployment' --organizationId='abc123OrganizationID'
```

_See code: [src/commands/deployment/create.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/deployment/create.ts)_

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

_See code: [src/commands/deployment/delete.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/deployment/delete.ts)_

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

_See code: [src/commands/deployment/list.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/deployment/list.ts)_

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
  spaces deployment:list-collections --id='abc123DeploymentID' --organizationId='abc123OrganizationID'
```

_See code: [src/commands/deployment/list-collections.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/deployment/list-collections.ts)_

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
  spaces deployment:list-spaces --id='abc123DeploymentID' --organizationId='abc123OrganizationID'
```

_See code: [src/commands/deployment/list-spaces.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/deployment/list-spaces.ts)_

## `spaces deployment:read`

Read all properties of a deployment

```
USAGE
  $ spaces deployment:read

OPTIONS
  -h, --help                       show CLI help
  --id=id                          (required)
  --organizationId=organizationId  (required)

EXAMPLE
  spaces deployment:read --id='abc123DeploymentID'
```

_See code: [src/commands/deployment/read.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/deployment/read.ts)_

## `spaces deployment:update`

Update one or more of a deployment's properties

```
USAGE
  $ spaces deployment:update

OPTIONS
  -h, --help                         show CLI help
  --id=id                            (required)
  --isGoogleIdentityProviderEnabled  (required)
  --name=name                        (required)
  --organizationId=organizationId    (required)

EXAMPLE
  spaces deployment:update --id='abc123OrganizationID' --isGoogleIdentityProviderEnabled --name='My Deployment'
```

_See code: [src/commands/deployment/update.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/deployment/update.ts)_

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

## `spaces image:create`

Create a new image

```
USAGE
  $ spaces image:create

OPTIONS
  -h, --help                                                                                             show CLI help
  --description=description
  --icon=icon                                                                                            (required)
  --imageRepositoryUrl=imageRepositoryUrl                                                                (required)
  --imageTag=imageTag                                                                                    (required)
  --name=name                                                                                            (required)
  --organizationId=organizationId                                                                        (required)
  --recommendedDockerPersistentStorageSizeinGigabytes=recommendedDockerPersistentStorageSizeinGigabytes  (required)
  --recommendedEnableDocker
  --recommendedEnableInboundClipboardRedirection
  --recommendedEnableOutboundClipboardRedirection
  --recommendedEnablePDFPrinter
  --recommendedEnablePersistentHome
  --recommendedInactivityTerminationDelayInMinutes=recommendedInactivityTerminationDelayInMinutes        (required)
  --recommendedPersistentHomeSizeInGigabytes=recommendedPersistentHomeSizeInGigabytes                    (required)
  --recommendedSize=recommendedSize                                                                      (required)
  --status=status                                                                                        (required)

EXAMPLE
  spaces image:create --description='This is a very good image.' --icon='base64imagecontent'
  --imageRepositoryUrl='https://my.registry.com/my/image' --imageTag='my.version'
  --organizationId='abc123OrganizationID' --status=LIVE
```

_See code: [src/commands/image/create.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/image/create.ts)_

## `spaces image:delete`

Delete an image

```
USAGE
  $ spaces image:delete

OPTIONS
  -h, --help                       show CLI help
  --id=id                          (required)
  --organizationId=organizationId  (required)

EXAMPLE
  spaces image:delete --id='abc123ImageID' --organizationId='abc123OrganizationID'
```

_See code: [src/commands/image/delete.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/image/delete.ts)_

## `spaces image:list`

List all of your images

```
USAGE
  $ spaces image:list

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  spaces image:list
```

_See code: [src/commands/image/list.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/image/list.ts)_

## `spaces image:read`

Read all properties of an image

```
USAGE
  $ spaces image:read

OPTIONS
  -h, --help                       show CLI help
  --id=id                          (required)
  --organizationId=organizationId  (required)

EXAMPLE
  spaces image:read --id='abc123ImageID' --organizationId='abc123OrganizationID'
```

_See code: [src/commands/image/read.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/image/read.ts)_

## `spaces image:update`

Update an image's properties

```
USAGE
  $ spaces image:update

OPTIONS
  -h, --help                       show CLI help
  --description=description
  --icon=icon
  --id=id                          (required)
  --organizationId=organizationId  (required)
  --status=status

EXAMPLE
  spaces image:update --id='abc123ImageID' --description='This is a very good image.' --icon='base64imagecontent'
  --organizationId='abc123OrganizationID' --status=LIVE
```

_See code: [src/commands/image/update.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/image/update.ts)_

## `spaces login`

Generate & save an authentication token

```
USAGE
  $ spaces login

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/login.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/login.ts)_

## `spaces logout`

Clear the saved authentication token

```
USAGE
  $ spaces logout

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/logout.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/logout.ts)_

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
  spaces organization:add-admin --id='abc123OrganizationID' --email='someone@example.com'
```

_See code: [src/commands/organization/add-admin.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/organization/add-admin.ts)_

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

_See code: [src/commands/organization/delete.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/organization/delete.ts)_

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

_See code: [src/commands/organization/list.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/organization/list.ts)_

## `spaces organization:list-collections`

List all collections in an organization

```
USAGE
  $ spaces organization:list-collections

OPTIONS
  -h, --help  show CLI help
  --id=id     (required)

EXAMPLE
  spaces organization:list-collections --id='abc123OrganizationID'
```

_See code: [src/commands/organization/list-collections.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/organization/list-collections.ts)_

## `spaces organization:list-deployments`

List all deployments in an organization

```
USAGE
  $ spaces organization:list-deployments

OPTIONS
  -h, --help  show CLI help
  --id=id     (required)

EXAMPLE
  spaces organization:list-deployments --id='abc123OrganizationID'
```

_See code: [src/commands/organization/list-deployments.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/organization/list-deployments.ts)_

## `spaces organization:list-spaces`

List all spaces in an organization

```
USAGE
  $ spaces organization:list-spaces

OPTIONS
  -h, --help  show CLI help
  --id=id     (required)

EXAMPLE
  spaces organization:list-spaces --id='abc123OrganizationID'
```

_See code: [src/commands/organization/list-spaces.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/organization/list-spaces.ts)_

## `spaces organization:read`

Read all properties of an organization

```
USAGE
  $ spaces organization:read

OPTIONS
  -h, --help  show CLI help
  --id=id     (required)

EXAMPLE
  spaces organization:read --id='abc123OrganizationID'
```

_See code: [src/commands/organization/read.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/organization/read.ts)_

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
  spaces organization:remove-admin --id='abc123OrganizationID' --email='someone@example.com'
```

_See code: [src/commands/organization/remove-admin.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/organization/remove-admin.ts)_

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

_See code: [src/commands/organization/update.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/organization/update.ts)_

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

_See code: [src/commands/space/delete.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/space/delete.ts)_

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

_See code: [src/commands/space/list.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/space/list.ts)_

## `spaces space:read`

Read all properties of a space

```
USAGE
  $ spaces space:read

OPTIONS
  -h, --help                   show CLI help
  --collectionId=collectionId  (required)
  --deploymentId=deploymentId  (required)
  --id=id                      (required)

EXAMPLE
  spaces space:read --id='abc123SpaceID' --collectionId='abc123CollectionID' --deploymentId='abc123DeploymentID'
```

_See code: [src/commands/space/read.ts](https://github.com/itopia-inc/spaces-cli/blob/v0.2.0/src/commands/space/read.ts)_

<!-- commandsstop -->
<!-- The comment above is required for `npm run docsgen` -->
