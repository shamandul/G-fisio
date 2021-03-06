let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/vue.js', 'public/js');
mix.js('resources/assets/js/axios.js', 'public/js');
mix.js('resources/assets/js/app.js', 'public/js').sass('resources/assets/sass/app.scss', 'public/css');
mix.js('resources/assets/js/script.js', 'public/js');
mix.js('resources/assets/js/script-salas.js', 'public/js');
mix.js('resources/assets/js/script-citas.js', 'public/js');
mix.js('resources/assets/js/script-usuarios.js', 'public/js');
mix.js('resources/assets/js/script-horas.js', 'public/js');
mix.js('resources/assets/js/script-facturas.js', 'public/js');
mix.js('resources/assets/js/script-users.js', 'public/js');
