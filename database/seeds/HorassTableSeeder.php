<?php

use Illuminate\Database\Seeder;
use App\Hora;

class HorassTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Hora::class, 10)->create();
    }
}
