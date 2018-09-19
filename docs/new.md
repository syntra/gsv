`gsv new`
=========

create new instances (blog|post|page)

* [`gsv new:blog [PATH]`](#gsv-newblog-path)
* [`gsv new:page [FILE]`](#gsv-newpage-file)
* [`gsv new:post [FILE]`](#gsv-newpost-file)

## `gsv new:blog [PATH]`

creates a new gatsby blog

```
USAGE
  $ gsv new:blog [PATH]

OPTIONS
  -c, --customStarter=customStarter  use a custom git repo as a starter
  -f, --force
  -h, --help                         show CLI help
  -s, --starter=starter              [default: default] gatsby starter to use
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
