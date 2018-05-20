<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;
use App\Servicio;

class ServiciosTest extends TestCase
{
  /**
   * Test a la página de Servicios
   *
   * @return void
   */
  public function test_vista_servicios()
  {
    /** Usuarios no registrados */
    $response = $this->get('/servicio');
    $response->assertStatus(302);
    /** Cliente no activo */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/servicio');
    $response->assertStatus(302);
    /** Administrador */
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/servicio');
    $response->assertStatus(200);
    /** Empleado */
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/servicio');
    $response->assertStatus(200);
    /** Cliente */
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->get('/servicio');
    $response->assertStatus(200);
  }
  /**
   * Test a la guardar Servicio a usuario no registrado
   *
   * @return void
   */
  public function test_guardar_servicio_usuario_no_registrado()
  {
    $datos = ['nombre_servicio' => 'Servicio de prueba no registrado',
    'descripcion' => 'Prueba de servicio para el test',
    'precio'=> '20',
    '_token' => csrf_token()];
    $response = $this->json('POST', '/servicios', $datos);
    $response->assertStatus(419);
  }
  /**
   * Test a la guardar Servicio a usuario registrado no activo
   *
   * @return void
   */
  public function test_guardar_servicio_usuario_registrado_no_activo()
  {
    $datos = ['nombre_servicio' => 'Servicio de prueba no activo',
    'descripcion' => 'Prueba de servicio para el test',
    'precio'=> '20',
    '_token' => csrf_token()];
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => false]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('POST', '/servicios', $datos);
    $response->assertStatus(419);
  }
  /**
   * Test a la guardar Servicio a usuario administrador
   *
   * @return void
   */
  public function test_guardar_servicio_usuario_administrador()
  {
    $datos = ['nombre_servicio' => 'Servicio de prueba administrador',
    'descripcion' => 'Prueba de servicio para el test',
    'precio'=> '20',
    '_token' => csrf_token()];
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('POST', '/servicios', $datos);
    $response->assertStatus(200);
  }
  /**
   * Test a la guardar Servicio a usuario empleado
   *
   * @return void
   */
  public function test_guardar_servicio_usuario_empleado()
  {
    $datos = ['nombre_servicio' => 'Servicio de prueba empleado',
    'descripcion' => 'Prueba de servicio para el test',
    'precio'=> '20',
    '_token' => csrf_token()];
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('POST', '/servicios', $datos);
    $response->assertStatus(200);
  }
  /**
   * Test a la guardar Servicio a usuario Cliente
   *
   * @return void
   */
  public function test_guardar_servicio_usuario_cliente()
  {
    $datos = ['nombre_servicio' => 'Servicio de prueba cliente',
    'descripcion' => 'Prueba de servicio para el test',
    'precio'=> '20',
    '_token' => csrf_token()];
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('POST', '/servicios', $datos);
    $response->assertStatus(200);
  }
  /**
   * Test a la update servicio usuario no registrado
   *
   * @return void
   */
  public function test_update_servicio_usuario_no_registrado()
  {
    $datos = ['nombre_servicio' => 'Servicio de actualización',
    'descripcion' => 'Prueba de servicio para el test con usuario no registrado',
    'precio'=> '20',
    '_token' => csrf_token()];
    $hora =factory(Servicio::class)->create([
      'nombre_servicio' => 'Servicio de actualización',
      'descripcion' => 'Prueba de servicio para el test',
      'precio'=> '20']);
      $response = $this->json('PUT', '/servicios/1', $datos);
      $response->assertStatus(419);
  }
  /**
   * Test a la update servicio usuario registrado no activo
   *
   * @return void
   */
  public function test_update_servicio_usuario_no_activo()
  {
    $datos = ['nombre_servicio' => 'Servicio de actualización',
    'descripcion' => 'Prueba de servicio para el test con usuario no activo',
    'precio'=> '20',
    '_token' => csrf_token()];
    $hora =factory(Servicio::class)->create([
      'nombre_servicio' => 'Servicio de actualización',
      'descripcion' => 'Prueba de servicio para el test',
      'precio'=> '20']);
    $user = factory(User::class)->create(['role' => 'cliente',
    'activo' => false]);
    $response = $this->actingAs($user)
                       ->withSession(['sesion' => 'test'])
                       ->json('PUT', '/servicios/1', $datos);
    $response->assertStatus(419);
  }
  /**
   * Test a la update servicio usuario administrador
   *
   * @return void
   */
  public function test_update_servicio_usuario_administrador()
  {
    $datos = ['nombre_servicio' => 'Servicio de actualización',
    'descripcion' => 'Prueba de servicio para el test con usuario administrador',
    'precio'=> '20',
    '_token' => csrf_token()];
    $hora =factory(Servicio::class)->create([
      'nombre_servicio' => 'Servicio de actualización',
      'descripcion' => 'Prueba de servicio para el test',
      'precio'=> '20']);
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'admin',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('PUT', '/servicios/1', $datos);
    $response->assertStatus(200);
  }
  /**
   * Test a la update servicio usuario empleado
   *
   * @return void
   */
  public function test_update_servicio_usuario_empleado()
  {
    $datos = ['nombre_servicio' => 'Servicio de actualización',
    'descripcion' => 'Prueba de servicio para el test con usuario empleado',
    'precio'=> '20',
    '_token' => csrf_token()];
    $hora = factory(Servicio::class)->create([
      'nombre_servicio' => 'Servicio de actualización',
      'descripcion' => 'Prueba de servicio para el test',
      'precio'=> '20']);
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'empleado',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('PUT', '/servicios/1', $datos);
    $response->assertStatus(200);
  }
  /**
   * Test a la update servicio usuario cliente
   *
   * @return void
   */
  public function test_update_servicio_usuario_cliente()
  {
    $datos = ['nombre_servicio' => 'Servicio de actualización',
    'descripcion' => 'Prueba de servicio para el test con usuario cliente',
    'precio'=> '20',
    '_token' => csrf_token()];
    $hora = factory(Servicio::class)->create([
      'nombre_servicio' => 'Servicio de actualización',
      'descripcion' => 'Prueba de servicio para el test',
      'precio'=> '20']);
    $this->withoutMiddleware();
    $user = factory(User::class)->create(['role' => 'cliente',
  'activo' => true]);
    $response = $this->actingAs($user)
                     ->withSession(['sesion' => 'test'])
                     ->json('PUT', '/servicios/1', $datos);
    $response->assertStatus(200);
  }
}
