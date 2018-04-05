<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Cita extends Authenticatable
{
  use Notifiable;

  /**
   * Estos atributos pueden ser asignados.
   *
   * @var array
   */
  protected $fillable = [
      'fecha', 'estado','created_at', 'updated_at','id_servicios', 'id_users',
  ];

  /**
   * Estos atributos permaneceran ocultos.
   *
   * @var array
   */
  protected $hidden = [
  ];
}
