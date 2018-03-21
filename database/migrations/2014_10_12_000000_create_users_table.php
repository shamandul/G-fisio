<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre')->default('');
            $table->string('apellidos')->default('');
            $table->string('telefono')->default('');
            $table->string('direccion')->default('');
            $table->enum('role',['cliente', 'empleado', 'admin'])->default('cliente');
            $table->string('email')->unique();
            $table->string('password');
            $table->boolean('activo')->default(false);
            $table->string('codigo_activacion')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
