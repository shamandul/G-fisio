<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//pruebas
Route::get('/servicio', function () {
    return view('servicios');
});

Auth::routes();
//ruta para el home

Route::get('/home', 'HomeController@index')->name('home');

// rutas para servicios
Route::resource('servicios', 'ServiciosController')->except([
    'create', 'show', 'edit'
]);
//Route::get('/home', 'HomeController@index')->name('home');
