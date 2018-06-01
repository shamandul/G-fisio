<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class RegisterTest extends DuskTestCase
{
  /**
   * A Dusk test para comprobar que
   * se muestra la página register
   *
   * @return void
   */
  public function test_register_page()
  {

    $this->browse(function ($browser){

       $browser->visit('/register')
                ->assertSee('Registrar') ;
   });
  }
  /**
   * A Dusk test que nos permite registar
   * a un usuario en la aplicación.
   *
   * @return void
   */
  public function test_register()
  {

    $this->browse(function (Browser $browser) {
        $browser->visit('/register')
                ->type('#nombre', 'usuarioTest')
                ->type('#email', 'usuariodeprueba@test.com')
                ->type('#password', '12345678')
                ->type('#password-confirm', '12345678')
                ->press('#enviar')
                ->assertPathIs('/register')
                ->assertSee('Por favor confirma tu email');
    });

  }
}
