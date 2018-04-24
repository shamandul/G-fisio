<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class UsersController extends Controller
{
    /**
     * Nos devuelve todos los usuarios y los datos para la paginación
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = User::orderBy('id','DESC')->paginate(4);

        return [
          'pagination' => [
            'total'        => $users->total(),
            'current_page' => $users->currentPage(),
            'per_page'     => $users->perPage(),
            'last_page'    => $users->lastPage(),
            'from'         => $users->firstItem(),
            'to'           => $users->lastPage(),
          ],
          'users' => $users
        ];
    }

    /**
     * Display the specified resource.
     * @return \Illuminate\Http\Response
     */
    public function showUserSession()
    {
        return [Auth::user()];
    }

    /**
     * Método que nos devuelve todos los empleados.
     *
     * @return \Illuminate\Http\Response
     */
    public function showEmpleados()
    {
      $empleados = User::orderBy('apellidos')->where('role', '=', 'empleado')->get();

      return $empleados;
    }

    /**
     * Método que nos devuelve todos los empleados.
     *
     * @return \Illuminate\Http\Response
     */
    public function showClientes()
    {
      $clientes = User::orderBy('apellidos')->where('role', '=', 'cliente')->get();

      return $clientes;
    }

    /**
     * Nos permite actualizar los datos
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $this->validate($request,[
        'nombre' => 'required|string',
        'apellidos' => 'required',
        'telefono'=> 'required',
        'direccion'=> 'required',
        'role' => 'required',
        'email' => 'required',
        'activo'=> 'required'
      ]);
      User::find($id)->update($request->all());
      return;
    }
}
