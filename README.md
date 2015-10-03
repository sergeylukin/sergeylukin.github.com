# About

This is my personal website. Mostly contains links to my projects, published
articles and blog posts.

# Quick start

In order to successfully build project files install `NodeJS`
and `Ruby` along with `Bundler` gem.

Then, install project's build tools:

```
$ bundle install && npm install
```

Add `./node_modules/.bin` to your `$PATH` environment variable so
that instead of running `./node_modules/.bin/gulp` you could just
run `gulp`. On `ZSH` or any other `Bash`-compatible shell you could
just add `export PATH=./node_modules/.bin:$PATH` to your `~/.zshrc`
or `~/.bashrc` or whatever your shell configuration file is and
restart your shell in order for changes to take effect.

# Development

Now all you need to have it up and be accessible at `http://localhost:9999`
is execute gulp's default task:

```
$ gulp
```

SASS and Javascript linting will automatically be triggered on SASS/JS files
saves.

You can lint SASS manually:

```
$ gulp scsslint
```

And here is how you can manually lint Javascript:

```
$ gulp jshint
```

## Production

Preview production-ready build at `http://localhost:9998`:

```
$ gulp preview
```

Deploy:

```
$ gulp deploy
```

# Tips

In order to keep app's performance as good as possible,
run images optimizer every time you add images to the project:

```
$ gulp optimize:images
```

Credits
-------

Free hosting:           Github
Website:                http://github.com/

Static site generator:  Jekyll
Website:                http://jekyllrb.com/

Version Control System: Git
Website:                http://git-scm.com/

Tasks automation:       Gulp
Website:                http://gulpjs.com/
