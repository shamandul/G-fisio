<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCitasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('citas', function (Blueprint $table) {
            $table->increments('id');
            $table->date('fecha');
            $table->string('estado')->default('');
            $table->timestamps();
            $table->integer('id_servicios')->unsigned();
            $table->integer('id_users')->unsigned();
            $table->integer('id_horas')->unsigned();
            $table->integer('id_salas')->unsigned();
            $table->foreign('id_servicios')->references('id')->on('servicios');
            $table->foreign('id_users')->references('id')->on('users');
            $table->foreign('id_horas')->references('id')->on('horas');
            $table->foreign('id_salas')->references('id')->on('salas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('citas');
    }
}
