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
          ->join('users as u', 'citas.id_users', '=', 'u.id')
          ->join('atiende', 'citas.id', '=', 'atiende.id_citas')
          ->join('users as e', 'atiende.id_users', '=', 'e.id')
          ->select('citas.*', 'servicios.nombre_servicio', 'horas.denominacion',
            'salas.nombre_sala', 'u.nombre', 'u.apellidos', 'e.nombre as nombre_empleado',
            'e.apellidos as apellidos_empleado', 'e.id as id_empleado')
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
          'id_servicios'=> 'required',
          'id_horas'=> 'required',
          'id_users'=> 'required',
          'id_salas'=> 'required'
        ]);

        $id_cita = DB::table('citas')->insertGetId($request->all());


        return $id_cita;
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
        'id_servicios'=> 'required',
        'id_horas'=> 'required',
        'id_users'=> 'required',
        'id_salas'=> 'required'
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
    /**
     * Nos devuelve todas las Citas que no tienen asignada una factura
     *
     * @return \Illuminate\Http\Response
     */
    public function citasInNotFacturas()
    {
      $citas = DB::table('citas')
            ->join('users', 'citas.id_users', '=', 'users.id')
            ->select('citas.*', 'users.nombre', 'users.apellidos')
            ->whereNotIn('citas.id',function($query){
              $query->select('facturas.id_citas')->from('facturas');
            })
            ->orderBy('id','DESC')->get();
            return [
          'citas' => $citas
        ];

    }

}
