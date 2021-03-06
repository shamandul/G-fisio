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
      'fecha', 'estado','id_servicios', 'id_users', 'id_salas', 'id_horas', 'id_empleados'
  ];

  /**
   * Estos atributos permaneceran ocultos.
   *
   * @var array
   */
  protected $hidden = [
  ];
}
