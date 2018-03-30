<?php

use Illuminate\Database\Seeder;
use App\Servicio;

class ServiciosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Seeder
        factory(Servicio::class, 10)->create();
    }
}
