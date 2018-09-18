<p align="center">
  <img alt="gsv icon" src="https://i.imgur.com/w0A4Qjj.png" width="150" />
</p>
<h1 align="center">
  gsv
</h1>

<p align="center">
  <strong>Powerful CLI tools for managing Gatsby blogs</strong><br>
  Create a blog in seconds. Add pages and posts all from the command-line.
</p>
<p align="center">
  <a href="https://github.com/syntra/gsv/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-974FC9.svg" alt="gsv is released under the MIT license." />
  </a>
  <a href="https://travis-ci.org/syntra/gsv">
    <img src="https://travis-ci.org/syntra/gsv.svg?branch=master" alt="Current TravisCI build status." />
  </a>
  <a href="https://codecov.io/gh/syntra/gsv">
    <img src="https://img.shields.io/codecov/c/github/syntra/gsv.svg" alt="Code coverage via codecov." />
  </a>
  <img src="https://img.shields.io/node/v/gsv.svg" alt="Minimum node version supported." />
  <a href="https://www.npmjs.org/package/gsv">
    <img src="https://img.shields.io/npm/v/gsv.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/gsv?minimal=true">
    <img src="https://img.shields.io/npm/dw/gsv.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://oclif.io/">
    <img src="https://img.shields.io/badge/CLI-oclif-394351.svg" alt="Powered by oclif." />
  </a>
  <a href="https://spectrum.chat/syntra/gsv">
    <img src="https://withspectrum.github.io/badge/badge.svg" alt="Join the community on Spectrum." />
  </a>
</p>

<!-- toc -->
* [🏗 Usage](#-usage)
* [🔨 Commands](#-commands)
* [💻 Contributing](#-contributing-)
* [📜 License](#-license)
* [📣 Feedback](#-feedback)
<!-- tocstop -->
# 🏗 Usage
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
# 🔨 Commands
<!-- commands -->
- [Usage](#usage)
- [Commands](#commands)
  - [`gsv hello [FILE]`](#gsv-hello-file)
  - [`gsv help [COMMAND]`](#gsv-help-command)
  - [`gsv new:blog [PATH]`](#gsv-newblog-path)
  - [`gsv new:page [FILE]`](#gsv-newpage-file)
  - [`gsv new:post [FILE]`](#gsv-newpost-file)

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

# 💻 Contributing ![Contributions welocome!](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)

Want to help gsv grow? We welcome all contributions, big or small! Check out the [contributing docs](https://github.com/syntra/gsv/blob/master/CONTRIBUTING.md) for more information.

# 📜 License

[MIT](https://github.com/syntra/gsv/blob/master/LICENSE) © 2018 Syntra

# 📣 Feedback

If you have any suggestions or just want to let us know what you think of gsv, join our [spectrum community](https://spectrum.chat/syntra/gsv)!
