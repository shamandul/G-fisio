<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
