<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class routerTest extends TestCase
{
    /**
     * Test a la página de bienvenida
     *
     * @return void
     */
    public function test_welcome()
    {
      $response = $this->get('/');
      $response->assertStatus(200);
    }
    /**
     * Test a la página de login
     *
     * @return void
     */
    public function test_login()
    {
      $response = $this->get('/login');
      $response->assertStatus(200);
    }
    /**
     * Test a la página de Registro
     *
     * @return void
     */
    public function test_register()
    {
      $response = $this->get('/register');
      $response->assertStatus(200);
    }
    

}
