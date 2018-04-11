<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sala;


class SalasController extends Controller
{
    /**
     *  Nos devuelve todas las y los datos para la paginación
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      $salas = Sala::orderBy('id','DESC')->paginate(4);

      return [
        'pagination' => [
          'total'        => $salas->total(),
          'current_page' => $salas->currentPage(),
          'per_page'     => $salas->perPage(),
          'last_page'    => $salas->lastPage(),
          'from'         => $salas->firstItem(),
          'to'           => $salas->lastPage(),
        ],
        'salas' => $salas
      ];
    }

    /**
     * Nos devuelve todos las salas
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function showAll()
    {
        $salas = Sala::orderBy('nombre_sala')->get();

        return $salas;
    }

    /**
     *  Método que nos permite guardar los servicios.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $this->validate($request,[
        'nombre_sala' => 'required'
      ]);
      Sala::create($request->all());
      return;
    }

    /**
     * Nos permite actualizar los datos.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $this->validate($request,[
        'nombre_sala' => 'required'
      ]);
      Sala::find($id)->update($request->all());
      return;
    }

    /**
     * Nos permite eliminar una sala.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $sala = Sala::findOrFail($id);
      $sala->delete();
    }
}
