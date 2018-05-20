<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;
use App\Hora;

class HorasTest extends TestCase
{
  /**
   * Test a la página de Horas
   *
   * @return void
   */
  public function test_vista_horas()
  {
    /** Usuarios no registrados */
    $response = $this->get('/hora');
    $response->assertStatus(302);
    /** Cliente no activo */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/hora');
    $response->assertStatus(302);
    /** Administrador */
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/hora');
    $response->assertStatus(200);
    /** Empleado */
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/hora');
    $response->assertStatus(200);
    /** Cliente */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/hora');
    $response->assertStatus(200);
  }
  /**
   * Test a la guardar hora usuario no registrado
   *
   * @return void
   */
  public function test_guardar_hora_usuario_no_registrado()
  {
    $datos = ['hora_inicio' => '10:00',
    'hora_fin' => '11:00',
    'denominacion'=> '10:00 a 11:00',
    '_token' => csrf_token()];
    /** Usuarios no registrados */
    $response = $this->json('POST', '/horas', $datos);
    $response->assertStatus(419);
  }
  /**
   * Test a la guardar hora usuario no activo
   *
   * @return void
   */
  public function test_guardar_hora_usuario_no_activo()
  {
    $datos = ['hora_inicio' => '10:00',
    'hora_fin' => '11:00',
    'denominacion'=> '10:00 a 11:00',
    '_token' => csrf_token()];
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('POST', '/horas', $datos);
    $response->assertStatus(419);

  }
  /**
   * Test a la guardar hora usuario administrador
   *
   * @return void
   */
  public function test_guardar_hora_usuario_administrador()
  {
    $datos = ['hora_inicio' => '10:00',
    'hora_fin' => '11:00',
    'denominacion'=> '10:00 a 11:00',
    '_token' => csrf_token()];
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('POST', '/horas', $datos);
    $response->assertStatus(200);

  }
  /**
   * Test a la guardar hora usuario empleado
   *
   * @return void
   */
  public function test_guardar_hora_usuario_empleado()
  {
    $datos = ['hora_inicio' => '10:00',
    'hora_fin' => '11:00',
    'denominacion'=> '10:00 a 11:00',
    '_token' => csrf_token()];
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('POST', '/horas', $datos);
    $response->assertStatus(200);

  }
  /**
   * Test a la guardar hora usuario
   *
   * @return void
   */
  public function test_guardar_hora_usuario_cliente()
  {
    $datos = ['hora_inicio' => '10:00',
    'hora_fin' => '11:00',
    'denominacion'=> '10:00 a 11:00',
    '_token' => csrf_token()];
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('POST', '/horas', $datos);
    $response->assertStatus(200);

  }
  /**
   * Test a la update hora usuario no registrado
   *
   * @return void
   */
  public function test_update_hora_usuario_no_registrado()
  {
    $hora = factory(Hora::class)->create([
      'hora_inicio' => '13:00',
      'hora_fin' => '14:00',
      'denominacion' => 'hora test no registrado']);
     $datos = ['hora_inicio' => '10:00',
    'hora_fin' => '12:00',
    'denominacion'=> '10:00 a 12:00',
    '_token' => csrf_token()];
    $response = $this->json('PUT', route('horas.update',[$hora->id]), $datos);
    $response->assertStatus(419);
  }
  /**
   * Test a la update hora usuario no activo
   *
   * @return void
   */
  public function test_update_hora_usuario_registrado_no_activo()
  {
    $hora = factory(Hora::class)->create([
      'hora_inicio' => '13:00',
      'hora_fin' => '14:00',
      'denominacion' => 'hora test no activo']);
     $datos = ['hora_inicio' => '10:00',
    'hora_fin' => '12:00',
    'denominacion'=> '10:00 a 12:00',
    '_token' => csrf_token()];
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('PUT', route('horas.update',[$hora->id]), $datos);
    $response->assertStatus(419);
  }
  /**
   * Test a la update hora usuario administrador
   *
   * @return void
   */
  public function test_update_hora_usuario_administrador()
  {
    $hora = factory(Hora::class)->create([
      'hora_inicio' => '13:00',
      'hora_fin' => '14:00',
      'denominacion' => 'hora test administrador']);
     $datos = ['hora_inicio' => '10:00',
    'hora_fin' => '12:00',
    'denominacion'=> '10:00 a 12:00',
    '_token' => csrf_token()];
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('PUT', route('horas.update',[$hora->id]), $datos);
    $response->assertStatus(200);

  }
  /**
   * Test a la update hora usuario empleado
   *
   * @return void
   */
  public function test_update_hora_usuario_empleado()
  {
    $hora = factory(Hora::class)->create([
      'hora_inicio' => '13:00',
      'hora_fin' => '14:00',
      'denominacion' => 'hora test empleado']);
     $datos = ['hora_inicio' => '10:00',
    'hora_fin' => '12:00',
    'denominacion'=> '10:00 a 12:00',
    '_token' => csrf_token()];
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('PUT', route('horas.update',[$hora->id]), $datos);
    $response->assertStatus(200);

  }
  /**
   * Test a la update hora usuario cliente
   *
   * @return void
   */
  public function test_update_hora_usuario_cliente()
  {
    $hora = factory(Hora::class)->create([
      'hora_inicio' => '13:00',
      'hora_fin' => '14:00',
      'denominacion' => 'hora test cliente']);
     $datos = ['hora_inicio' => '10:00',
    'hora_fin' => '12:00',
    'denominacion'=> '10:00 a 12:00',
    '_token' => csrf_token()];
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('PUT', route('horas.update',[$hora->id]), $datos);
    $response->assertStatus(200);

  }
  /**
   * Test a la delete hora usuario no registrado
   *
   * @return void
   */
  public function test_delete_hora_usuario_no_registrado()
  {
    $hora = factory(Hora::class)->create([
      'hora_inicio' => '13:00',
      'hora_fin' => '14:00',
      'denominacion' => 'hora test no registrado']);
    $response = $this->json('DELETE', route('horas.destroy',[$hora->id]));
    $response->assertStatus(419);
  }
  /**
   * Test a la delete hora usuario no activo
   *
   * @return void
   */
  public function test_delete_hora_usuario_registrado_no_activo()
  {
    $hora = factory(Hora::class)->create([
      'hora_inicio' => '13:00',
      'hora_fin' => '14:00',
      'denominacion' => 'hora test no activo']);
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('DELETE', route('horas.destroy',[$hora->id]));
    $response->assertStatus(419);
  }
  /**
   * Test a la delete hora usuario administrador
   *
   * @return void
   */
  public function test_delete_hora_usuario_administrador()
  {
    $hora = factory(Hora::class)->create([
      'hora_inicio' => '13:00',
      'hora_fin' => '14:00',
      'denominacion' => 'hora test administrador']);
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('DELETE', route('horas.destroy',[$hora->id]));
    $response->assertStatus(200);

  }
  /**
   * Test a la delete hora usuario empleado
   *
   * @return void
   */
  public function test_delete_hora_usuario_empleado()
  {
    $hora = factory(Hora::class)->create([
      'hora_inicio' => '13:00',
      'hora_fin' => '14:00',
      'denominacion' => 'hora test empleado']);
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('DELETE', route('horas.destroy',[$hora->id]));
    $response->assertStatus(200);

  }
  /**
   * Test a la delete hora usuario cliente
   *
   * @return void
   */
  public function test_delete_hora_usuario_cliente()
  {
    $hora = factory(Hora::class)->create([
      'hora_inicio' => '13:00',
      'hora_fin' => '14:00',
      'denominacion' => 'hora test cliente']);
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('DELETE', route('horas.destroy',[$hora->id]));
    $response->assertStatus(200);

  }
}
