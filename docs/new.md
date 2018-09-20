# new

create new instances \(blog\|post\|page\)

* [`gsv new:blog [PATH]`](new.md#gsv-newblog-path)
* [`gsv new:page [FILE]`](new.md#gsv-newpage-file)
* [`gsv new:post`](new.md#gsv-newpost)

## `gsv new:blog [PATH]`

creates a new gatsby blog

```text
USAGE
  $ gsv new:blog [PATH]

OPTIONS
  -c, --customStarter=customStarter  use a custom git repo as a starter
  -f, --force
  -h, --help                         show CLI help
  -s, --starter=starter              [default: default] gatsby starter to use
```

_See code:_ [_src/commands/new/blog.ts_](https://github.com/syntra/gsv/blob/v0.0.1/src/commands/new/blog.ts)

## `gsv new:page [FILE]`

add a new page to the current blog

```text
USAGE
  $ gsv new:page [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code:_ [_src/commands/new/page.ts_](https://github.com/syntra/gsv/blob/v0.0.1/src/commands/new/page.ts)

## `gsv new:post`

generate a new multi-command CLI

```text
USAGE
  $ gsv new:post
```

_See code:_ [_src/commands/new/post.ts_](https://github.com/syntra/gsv/blob/v0.0.1/src/commands/new/post.ts)

