<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'nombre' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$ll//EoSPZyvAWqF1HIIIuuM8rlQFobrkP1Zeqa0geU5wvkD9vD01u', // 12345678
        'remember_token' => str_random(10),
    ];
});
$factory->define(App\Servicio::class, function (Faker $faker) {
    return [
        'nombre_servicio' => $faker->sentence(2),
        'descripcion' => $faker->text(120),
        'precio' => $faker->text(10),
    ];
});

$factory->define(App\Sala::class, function (Faker $faker) {
    return [
        'nombre_sala' => $faker->sentence(2)
    ];
});

$factory->define(App\Hora::class, function (Faker $faker) {
    return [
        'hora_inicio' => $faker->numberBetween(8,20),
        'hora_fin' => $faker->numberBetween(8,20),
        'denominacion' => $faker->text(10),
    ];
});
