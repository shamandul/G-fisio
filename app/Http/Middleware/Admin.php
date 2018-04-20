<?php

namespace App\Http\Middleware;

use Illuminate\Contracts\Auth\Factory as Auth;
use App\User;
use Closure;

class Admin
{
      protected $auth;

     /**
      * Crear una nueva instancia middlewar.
      *
      * @param  \Illuminate\Contracts\Auth\Factory  $auth
      * @return void
      */
     public function __construct(Auth $auth)
     {
         $this->auth = $auth;
     }
    /**
     * Manejar una solicitud entrante.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
      if($this->auth->user()->admin()){
        return $next($request);
      }
      dd('usuario ');
    }
}
