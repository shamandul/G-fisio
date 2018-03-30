<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * Estos atributos pueden ser asignados.
     *
     * @var array
     */
    protected $fillable = [
        'nombre','apellidos','telefono','direccion','role','activo','codigo_activacion', 'email', 'password',
    ];

    /**
     * Estos atributos permaneceran ocultos.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
