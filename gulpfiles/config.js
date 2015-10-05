var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    sass:    srcAssets + '/scss/**/*.{sass,scss}',
    scripts: srcAssets + '/javascripts/**/*.js',
    images:  srcAssets + '/images/**/*',
    fonts:   srcAssets + '/fonts/**/*',
    svg:     srcAssets + '/svg/*.svg'
  },

  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/**',
        developmentAssets + '/svg/**'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998
    }
  },

  delete: {
    src: [
      developmentAssets,
      srcAssets + '/javascripts/modernizr-custom.js'
    ]
  },

  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml'
    },
    production: {
      src:    src,
      dest:   production,
      config: '_config.yml,_config.build.yml'
    }
  },

  sass: {
    src:  srcAssets + '/scss/**/*.scss',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true
    }
  },

  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },

  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries:    './' + srcAssets + '/javascripts/head.js',
      dest:       developmentAssets + '/js',
      outputName: 'head.js',
      ignore: []
    }, {
      entries:    './' + srcAssets + '/javascripts/application.js',
      dest:       developmentAssets + '/js',
      outputName: 'application.js',
      // We require Modernizr in head.js so exclude it from here
      ignore: ['modernizr']
    }]
  },

  modernizr: {
    src: [
      srcAssets + '/javascripts/**/*.js',
      srcAssets + '/scss/**/*.scss'
    ],
    customizr: {
      options: [
        "setClasses",
        "addTest"
      ]
    },
    dest: srcAssets + '/javascripts/',
    filename: 'modernizr-custom.js'
  },

  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },

  copyfonts: {
    development: {
      src:  srcAssets + '/fonts/**/*.{eot,woff,ttf,svg}',
      dest: developmentAssets + '/fonts'
    },
    production: {
      src:  srcAssets + '/fonts/**/*.{eot,woff,ttf,svg}',
      dest: productionAssets + '/fonts'
    }
  },

  inlinesvg: {
    development: {
      src: development + '/**/*.html',
      dest: development,
      basePath: build
    },
    production: {
      src: production + '/**/*.html',
      dest: production,
      basePath: production
    }
  },

  copysvg: {
    development: {
      src:  srcAssets + '/svg/**/*.svg',
      dest: developmentAssets + '/svg'
    },
    production: {
      src:  srcAssets + '/svg/**/*.svg',
      dest: productionAssets + '/svg'
    }
  },

  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },

  scsslint: {
    src: [
      srcAssets + '/scss/**/*.{sass,scss}',
      '!' + srcAssets + '/scss/base/_sprites.scss',
      '!' + srcAssets + '/scss/helpers/_meyer-reset.scss'
      ],
      options: {
        bundleExec: true
      }
  },

  jshint: {
    src: [
      srcAssets + '/javascripts/*.js',
      '!' + srcAssets + '/javascripts/modernizr-custom.js'
    ]
  },

  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src:  developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: developmentAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        collapseWhitespace: true
      }
    }
  },

  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/images/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },

  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  },

  inlinesource: {
    production: {
      compress: true,
      src: production + '/**/*.html',
      dest: production
    }
  },

  deploy: {
    src: [production + '/**/*', production + '/.*'],
    options: {
      branch: 'master',
      force: true,
      push: true,
      message: 'build'
    }
  }
};
