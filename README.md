itopia Spaces CLI
=================

An [oclif](https://oclif.io)-based CLI wrapper
for [the itopia Spaces API](https://api.spaces.itopia.com)

For more information about itopia Spaces,
see https://spaces.itopia.com

For more information about the itopia Spaces API,
see https://api.spaces.itopia.com

# TODO list

- Packaging
- Codegen
- Licensing
- Open source

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
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
# Commands
<!-- commands -->
* [`spaces hello [FILE]`](#spaces-hello-file)
* [`spaces help [COMMAND]`](#spaces-help-command)

## `spaces hello [FILE]`

describe the command here

```
USAGE
  $ spaces hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ spaces hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/itopia/spaces-cli/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
