<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use App\User;

class LoginTest extends DuskTestCase
{
    /**
     * A Dusk test para comprobar que
     * se muestra la página login
     *
     * @return void
     */
    public function test_login_page()
    {

      $this->browse(function ($browser){

         $browser->visit('/login')
                  ->assertSee('INICIAR SESIÓN') ;
     });
    }
    /**
     * A Dusk test que nos permite hacer
     * login a la aplicación.
     *
     * @return void
     */
    public function test_login()
    {
      $user = factory(User::class)->create([
        'email' => 'usuariotest@test.com'
      ]);

      $this->browse(function (Browser $browser) use($user) {
          $browser->visit('/login')
                  ->type('#email', $user->email)
                  ->type('#password', '12345678')
                  ->press('#login')
                  ->assertPathIs('/');
      });

    }
}
