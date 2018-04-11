<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Atiende extends Authenticatable
{
  use Notifiable;

  /**
   * Estos atributos pueden ser asignados.
   *
   * @var array
   */
  protected $fillable = [
      'id_citas','id_users',
  ];

  /**
   * Estos atributos permaneceran ocultos.
   *
   * @var array
   */
  protected $hidden = [

  ];
}
