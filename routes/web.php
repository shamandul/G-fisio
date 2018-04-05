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
// pruebas
Route::get('/servicio', function () {
    return view('servicios');
});

Route::get('/sala', function () {
    return view('salas');
});

Route::get('/cita', function () {
    return view('citas');
});
Route::get('/hora', function () {
    return view('horas');
});

// pruebas

Auth::routes();
//ruta para el home

Route::get('/home', 'HomeController@index')->name('home');

// rutas para servicios
Route::resource('servicios', 'ServiciosController')->except([
    'create', 'show', 'edit'
]);
Route::get('servicios/showAll', 'ServiciosController@showAll')->name('servicios.showAll');

// rutas para salas
Route::resource('salas', 'SalasController')->except([
    'create', 'show', 'edit'
]);
// rutas para citas
Route::resource('citas', 'CitasController')->except([
    'create', 'show', 'edit'
]);

// rutas para horas
Route::resource('horas', 'HorasController')->except([
    'create', 'show', 'edit'
]);
