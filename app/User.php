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
        'nombre','apellidos','telefono','direccion','role','activo', 'email', 'password',
    ];

    /**
     * Estos atributos permaneceran ocultos.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token','codigo_activacion'
    ];

    public static function boot(){
     parent::boot();
     static::creating(function ($user){
       $user->codigo_activacion = str_random(190);
     });
   }
   public function confirmEmail(){
     $this->activo = true;
     $this->codigo_activacion = str_random(190);
     $this->save();
   }
}
