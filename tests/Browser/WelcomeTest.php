<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class WelcomeTest extends DuskTestCase
{
    /**
     * A Dusk test para comprobar que
     * se muestra la página welcome
     *
     * @return void
     */
    public function test_welcome_page()
    {

      $this->browse(function ($browser){

         $browser->visit('/')
                  ->assertSee('G-Fisio') ;
     });
    }
}
