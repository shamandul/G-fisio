<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class SalasTest extends TestCase
{
  /**
   * Test a la página de sala para el rol administrador
   *
   * @return void
   */
  public function test_vista_sala_admi()
  {
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/sala');
    $response->assertStatus(200);
  }
  /**
   * Test a la página de sala para el rol empleado
   *
   * @return void
   */
  public function test_vista_sala_empleado()
  {
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/sala');
    $response->assertStatus(200);
  }
  /**
   * Test a la página de sala para el rol cliente
   *
   * @return void
   */
  public function test_vista_sala_cliente()
  {
    $user = factory(User::class)->create(['role' => 'cliente']);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/sala');
    $response->assertStatus(302);
  }
}
