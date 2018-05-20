<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class LoginTest extends TestCase
{
    /**
     * Test a la página de inicio
     *
     * @return void
     */
    public function test_login()
    {

      $user = factory(User::class)->create();
      $this->withoutMiddleware();
      $response = $this->actingAs($user)
                       ->withSession(['sesion' => 'test'])
                       ->get('/home');
      $response->assertStatus(200);
    }
}
