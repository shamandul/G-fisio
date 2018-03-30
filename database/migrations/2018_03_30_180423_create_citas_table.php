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
            $table->increments('id_citas');
            $table->date('fecha');
            $table->string('estado')->default('');
            $table->timestamps();
            $table->integer('id_servicios')->unsigned();
            $table->integer('id_users')->unsigned();
            $table->foreign('id_servicios')->references('id_servicios')->on('servicios');
            $table->foreign('id_users')->references('id')->on('users');
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
