<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Hora extends Authenticatable
{
    use Notifiable;

    /**
     * Estos atributos pueden ser asignados.
     *
     * @var array
     */
    protected $fillable = [
        'hora_inicio','Hora_fin','denominacion',
    ];

    /**
     * Estos atributos permaneceran ocultos.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
