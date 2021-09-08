# itopia Spaces CLI

An [oclif](https://oclif.io)-based CLI wrapper
for [the itopia Spaces API](https://api.spaces.itopia.com)

For more information about itopia Spaces,
see https://spaces.itopia.com

For more information about the itopia Spaces API,
see https://api.spaces.itopia.com

# TODO list

- Add `:read` commands for every topic
- Add `me` topic
  - `me:list-organizations`
  - `me:list-deployments`
  - `me:list-collections`
  - `me:list-spaces`
  - `me:read`
- Add `image` topic and related commands
  - `image:create`
  - `image:read`
  - `image:update`
  - `image:delete`
  - `organization:list-images`
- Add end user management commands
  - `collection:add-user`
  - `collection:remove-user`
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

- [`spaces help [COMMAND]`](#spaces-help-command)
- [`spaces login`](#spaces-login)
- [`spaces logout`](#spaces-logout)
- [`spaces organization:create`](#spaces-organizationcreate)

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

<!-- commandsstop -->
<!-- The comment above is required for `npm run docsgen` -->
