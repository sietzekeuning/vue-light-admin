const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

mix.js('src/js/admin.js', 'dist')
   .sass('src/sass/admin.scss', 'dist')
   .options({
       processCssUrls : false,
       postCss        : [tailwindcss('./tailwind.js')]
   })

if (mix.inProduction()) {
    mix.version()
}
