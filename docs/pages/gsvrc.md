# `.gsvrc`

The `.gsvrc` file is the most important file for gsv. It's where you define all your configuration options for your blog. Every gsv managed gatsby blog should have a `.gsvrc` file in the root directory. If you do not have a `.gsvrc` file, you can create one using [config:init](commands/config.md).

The `.gsvrc` file uses YAML syntax. Here is an example of a valid configuration

```yaml
title: My Awesome Blog
url: https://syntra.io
author:
  - name: Garet McKinley
    email: hi@garet.io
```

## title

The `title` property sets the global title for your blog. This is what appears at the top of every page (by default) and is the `<title/>` in the `<head/>` of the index page.

```yaml
title: My Blog Title
```

## url

The `url` property is the root url of your blog, without trailing slashes.

```yaml
url: https://syntra.io
```

## author

The `author` property is an array of authors that will be posting on your blog. You can have as many or as few as you'd like.

```yaml
author:
  - name: Garet McKinley
    email: hi@garet.io
  - name: Jeff Bezos
    email: jeff@amazon.com
```

## dir

The `dir` property is optional and allows you to override the default paths to save blog posts and pages.

The default path to save pages to is `src/pages` and the default path to save posts to is `src/posts`.

```yaml
dir:
  pages: src/content/pages
  posts: src/content/posts
```
