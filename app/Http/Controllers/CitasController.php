<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Cita;


class CitasController extends Controller
{
  /**
   * Nos devuelve todas las Citas y los datos para la paginación
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    $citas = DB::table('citas')
          ->join('servicios', 'citas.id_servicios', '=', 'servicios.id')
          ->join('salas', 'citas.id_salas', '=', 'salas.id')
          ->join('horas', 'citas.id_horas', '=', 'horas.id')
          ->join('users', 'citas.id_users', '=', 'users.id')
          ->select('citas.*', 'servicios.nombre_servicio', 'horas.denominacion',
            'salas.nombre_sala', 'users.nombre', 'users.apellidos')
          ->orderBy('id','DESC')
          ->paginate(4);
          return [
        'pagination' => [
          'total'        => $citas->total(),
          'current_page' => $citas->currentPage(),
          'per_page'     => $citas->perPage(),
          'last_page'    => $citas->lastPage(),
          'from'         => $citas->firstItem(),
          'to'           => $citas->lastPage(),
        ],
        'citas' => $citas
      ];
  }


    /**
     * Método que nos permite guardar las citas.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
          'fecha' => 'required',
          'estado' => 'required',
          'id_servicios'=> 'required'
        ]);
        Cita::create($request->all());
        return;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // TODO hacer el metodo para mostrar una cita
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
        'fecha' => 'required',
        'estado' => 'required',
        'id_servicios'=> 'required'
      ]);
      Cita::find($id)->update($request->all());
      return;
    }

    /**
     * Nos permite eliminar una cita
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cita = Cita::findOrFail($id);
        $cita->delete();
    }

}
