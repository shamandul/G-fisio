<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Servicio extends Authenticatable
{
    use Notifiable;

    /**
     * Estos atributos pueden ser asignados.
     *
     * @var array
     */
    protected $fillable = [
        'nombre_servicio','descripcion','precio',
    ];

    /**
     * Estos atributos permaneceran ocultos.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
