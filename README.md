Quick start
-----------

Install project's Ruby dependencies

```
$ bundle install
```

Install NodeJS dependencies

```
$ npm install
```

Make unoptimized build and serve it with auto-reloading via
`http://localhost:9000`:

```
$ ./node_modules/gulp/bin/gulp.js
```

Run SCSS lint:

```
$ ./node_modules/gulp/bin/gulp.js scsslint
```

Run JS lint:

```
$ ./node_modules/gulp/bin/gulp.js scsshint
```

When adding images, run optimizer:

```
$ ./node_modules/gulp/bin/gulp.js optimize:images
```

Preview production-ready build:

```
$ ./node_modules/gulp/bin/gulp.js preview
```

Deploy production build:

```
$ ./node_modules/gulp/bin/gulp.js deploy
```

Credits
-------

Free hosting:           Github
Website:                http://github.com/

Static site generator:  Jekyll
Website:                http://jekyllrb.com/

Version Control System: Git
Website:                http://git-scm.com/
