<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class UsersTest extends TestCase
{
  /**
   * Test a la página de usuarios
   *
   * @return void
   */
  public function test_vista_users()
  {
    /** Usuarios no registrados */
    $response = $this->get('/usuario');
    $response->assertStatus(302);
    /** Cliente no activo */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/usuario');
    $response->assertStatus(302);
    /** Administrador */
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/usuario');
    $response->assertStatus(200);
    /** Empleado */
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/usuario');
    $response->assertStatus(200);
    /** Cliente */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/usuario');
    $response->assertStatus(200);
  }
  /**
   * Test a showAllEmpleadosLibre
   * fecha 2018-04-27 y id_horo 6
   * @return void
   */
  public function test_show_all_empleados_libre()
  {
    /** Usuarios no registrados */
    $response = $this->get('users/showAllEmpleadosLibre/2018-04-27/6');
    $response->assertStatus(302);
    /** Cliente no activo */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('users/showAllEmpleadosLibre/2018-04-27/6');
    $response->assertStatus(302);
    /** Administrador */
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('users/showAllEmpleadosLibre/2018-04-27/6');
    $response->assertStatus(200);
    /** Empleado */
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('users/showAllEmpleadosLibre/2018-04-27/6');
    $response->assertStatus(200);
    /** Cliente */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('users/showAllEmpleadosLibre/2018-04-27/6');
    $response->assertStatus(200);
  }
}
