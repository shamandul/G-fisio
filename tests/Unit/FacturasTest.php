<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class FacturasTest extends TestCase
{
  /**
   * Test a la página de Facturas
   *
   * @return void
   */
  public function test_vista_facturas()
  {
    /** Usuarios no registrados */
    $response = $this->get('/factura');
    $response->assertStatus(302);
    /** Cliente no activo */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/factura');
    $response->assertStatus(302);
    /** Administrador */
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/factura');
    $response->assertStatus(200);
    /** Empleado */
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/factura');
    $response->assertStatus(200);
    /** Cliente */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/factura');
    $response->assertStatus(200);
  }
}
