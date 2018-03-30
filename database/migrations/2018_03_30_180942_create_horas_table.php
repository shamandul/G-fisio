<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHorasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horas', function (Blueprint $table) {
            $table->increments('id_horas');
            $table->string('hora_inicio')->default('');
            $table->string('hora_fin')->default('');
            $table->string('denominacion')->default('');
            $table->timestamps();
            $table->foreign('id_citas')->references('id_citas')->on('citas');
            $table->foreign('id_salass')->references('id_salas')->on('salas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('horas');
    }
}
