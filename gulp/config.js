var dest = './dist';
var src = './src';

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8080,
      livereload: {
        port: 35929
      }
    }
  },
  sass: {
    src: src + '/client/styles/**/*.{sass,scss,css}',
    dest: dest + '/styles',
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/client/images' // Used by the image-url helper
    }
  },
  browserify: {
    settings: {
      transform: ['reactify', 'babelify']
    },
    src: src + '/client/js/index.jsx',
    dest: dest + '/js',
    outputName: 'index.js'
  },
  html: {
    src: 'src/client/index.html',
    dest: dest
  },
  deps: {
    src: ['node_modules/reactfire/dist/reactfire.min.js'],
    dest: dest + '/js/lib/'
  },
  watch: {
    src: 'src/client/**/*.*',
    tasks: ['build']
  },
  jshint: {
    src: ['src/**/*.{js,jsx}']
  }
};
