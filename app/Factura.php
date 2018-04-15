<?php
namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Factura extends Authenticatable
{
    use Notifiable;

    /**
     * Estos atributos pueden ser asignados.
     *
     * @var array
     */
    protected $fillable = [
        'fecha_emision','estado','fecha_pago', 'id_citas',
    ];

    /**
     * Estos atributos permaneceran ocultos.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
