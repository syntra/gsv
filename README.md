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
  <a href="https://spectrum.chat/syntra/gsv">
    <img src="https://img.shields.io/badge/chat-on%20spectrum-7B16FF.svg?style=flat-square" alt="Join the community on Spectrum." />
  </a>
  <a href="https://github.com/syntra/gsv/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-974FC9.svg?style=flat-square" alt="gsv is released under the MIT license." />
  </a>
  <a href="https://travis-ci.org/syntra/gsv">
    <img src="https://img.shields.io/travis/syntra/gsv.svg?style=flat-square" alt="Current TravisCI build status." />
  </a>
  <a href="https://codeclimate.com/github/syntra/gsv/maintainability">
    <img src="https://img.shields.io/codeclimate/maintainability/syntra/gsv.svg?style=flat-square" alt="Code Climate maintainability grade." />
  </a>
  <a href="https://codeclimate.com/github/syntra/gsv/trends/test_coverage_total">
    <img src="https://img.shields.io/codeclimate/coverage/syntra/gsv.svg?style=flat-square" alt="Code Climate test coverage." />
  </a>
  <img src="https://img.shields.io/node/v/gsv.svg?style=flat-square" alt="Minimum node version supported." />
  <a href="https://www.npmjs.org/package/gsv">
    <img src="https://img.shields.io/npm/v/gsv.svg?style=flat-square" alt="Current npm package version." />
  </a>
  <a href="https://oclif.io/">
    <img src="https://img.shields.io/badge/CLI-oclif-394351.svg?style=flat-square" alt="Powered by oclif." />
  </a>
</p>

<img src="https://img.gitbutn.io/hint/?&txt=Notice:%20gsv%20is%20still%20in%20the%20early%20pre-alpha%20stage%20and%20not%20ready%20for%20use.&type=warning" width="100%" />

<!-- toc -->
* [🏗 Usage](#-usage)
* [🔨 Commands](#-commands)
* [💻 Contributing](#-contributing)
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
* [`gsv help [COMMAND]`](#gsv-help-command)
* [`gsv new:blog [PATH]`](#gsv-newblog-path)
* [`gsv new:page [FILE]`](#gsv-newpage-file)
* [`gsv new:post [FILE]`](#gsv-newpost-file)

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

_See code: [src/commands/new/blog.ts](https://github.com/syntra/gsv/blob/v0.0.1/src/commands/new/blog.ts)_

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

_See code: [src/commands/new/page.ts](https://github.com/syntra/gsv/blob/v0.0.1/src/commands/new/page.ts)_

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

_See code: [src/commands/new/post.ts](https://github.com/syntra/gsv/blob/v0.0.1/src/commands/new/post.ts)_
<!-- commandsstop -->

# 💻 Contributing
### ![Contributions welocome!](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)

Want to help gsv grow? We welcome all contributions, big or small! Check out the [contributing docs](https://github.com/syntra/gsv/blob/master/CONTRIBUTING.md) for more information.

# 📜 License

[![MIT](https://img.gitbutn.io/button/?&title=MIT&sub=%C2%A9%202018%20Syntra&icon=legal&ico=ffffff&lco=663698&rco=984dcb&tc=ffffff&sc=ffffff&size=lg)](https://github.com/syntra/gsv/blob/master/LICENSE)

# 📣 Feedback

If you have any suggestions or just want to let us know what you think of gsv, join our [spectrum community](https://spectrum.chat/syntra/gsv)!
