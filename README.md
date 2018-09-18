gsv
===

Opinionated gatsby starter with powerful cli tools

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gsv.svg)](https://npmjs.org/package/gsv)
[![Downloads/week](https://img.shields.io/npm/dw/gsv.svg)](https://npmjs.org/package/gsv)
[![License](https://img.shields.io/npm/l/gsv.svg)](https://github.com/syntra/gsv/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gsv
$ gsv COMMAND
running command...
$ gsv (-v|--version|version)
gsv/0.0.1 linux-x64 node-v10.10.0
$ gsv --help [COMMAND]
USAGE
  $ gsv COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gsv hello [FILE]`](#gsv-hello-file)
* [`gsv help [COMMAND]`](#gsv-help-command)
* [`gsv new:blog [PATH]`](#gsv-newblog-path)
* [`gsv new:page [FILE]`](#gsv-newpage-file)
* [`gsv new:post [FILE]`](#gsv-newpost-file)

## `gsv hello [FILE]`

describe the command here

```
USAGE
  $ gsv hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ gsv hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/gsv/cli/blob/v0.0.1/src/commands/hello.ts)_

## `gsv help [COMMAND]`

display help for gsv

```
USAGE
  $ gsv help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_

## `gsv new:blog [PATH]`

creates a new gatsby blog

```
USAGE
  $ gsv new:blog [PATH]

OPTIONS
  -f, --force
  -h, --help             show CLI help
  -n, --starter=starter  [default: default] gatsby sttarter to use
```

_See code: [src/commands/new/blog.ts](https://github.com/gsv/cli/blob/v0.0.1/src/commands/new/blog.ts)_

## `gsv new:page [FILE]`

add a new page to the current blog

```
USAGE
  $ gsv new:page [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/new/page.ts](https://github.com/gsv/cli/blob/v0.0.1/src/commands/new/page.ts)_

## `gsv new:post [FILE]`

add a new post to the current blog

```
USAGE
  $ gsv new:post [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/new/post.ts](https://github.com/gsv/cli/blob/v0.0.1/src/commands/new/post.ts)_
<!-- commandsstop -->
