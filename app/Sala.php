<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Sala extends Authenticatable
{
  use Notifiable;

  /**
   * Estos atributos pueden ser asignados.
   *
   * @var array
   */
  protected $fillable = [
      'nombre_sala',
  ];

  /**
   * Estos atributos permaneceran ocultos.
   *
   * @var array
   */
  protected $hidden = [

  ];
}
