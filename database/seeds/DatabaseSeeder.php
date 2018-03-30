<?php

use Illuminate\Database\Seeder;
use App\Servicios;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(Servicios::class, 5);
    }
}
