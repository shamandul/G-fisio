<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class CitasTest extends TestCase
{
  /**
   * Test a la página de panel de citas
   *
   * @return void
   */
  public function test_vista_panel_cita()
  {
    /** Usuarios no registrados */
    $response = $this->get('/cita');
    $response->assertStatus(302);
    /** Cliente no activo */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/cita');
    $response->assertStatus(302);
    /** Administrador */
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/cita');
    $response->assertStatus(200);
    /** Empleado */
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/cita');
    $response->assertStatus(200);
    /** Cliente */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/cita');
    $response->assertStatus(200);
  }
  /**
   * Test a la getCitasPorClientes
   *
   * @return void
   */
  public function test_get_citas_por_clientes()
  {
    /** Usuarios no registrados */
    $response = $this->get('/citas/getCitasPorClientes/1');
    $response->assertStatus(302);
    /** Cliente no activo */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/citas/getCitasPorClientes/1');
    $response->assertStatus(302);
    /** Administrador */
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/citas/getCitasPorClientes/1');
    $response->assertStatus(200);
    /** Empleado */
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/citas/getCitasPorClientes/1');
    $response->assertStatus(200);
    /** Cliente */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/citas/getCitasPorClientes/1');
    $response->assertStatus(200);
  }
}
