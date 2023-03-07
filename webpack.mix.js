let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-compress');

mix.js('src/js/app.js', 'assets')
   .sass('src/scss/app.scss', 'assets')
   .options({
      processCssUrls: false,
      postCss: [tailwindcss('tailwind.config.js')]
   });
   mix.minify('assets/app.css')

   