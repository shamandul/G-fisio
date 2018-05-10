<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Hora;

class HorasController extends Controller
{
    /**
     * Nos devuelve todas las horass y los datos para la paginación
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $horas = Hora::orderBy('id','DESC')->paginate(4);

        return [
          'pagination' => [
            'total'        => $horas->total(),
            'current_page' => $horas->currentPage(),
            'per_page'     => $horas->perPage(),
            'last_page'    => $horas->lastPage(),
            'from'         => $horas->firstItem(),
            'to'           => $horas->lastPage(),
          ],
          'horas' => $horas
        ];
    }
    /**
     * Nos devuelve todas las Horas
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function showAll()
    {
        $horas = Hora::orderBy('denominacion')->get();

        return $horas;
    }

    /**
     * Nos devuelve todas las Horas para una fecha dada
     *
     * @param  \Illuminate\Http\Request  $request
     * @param String $fecha
     * @return \Illuminate\Http\Response
     */
    public function showAllLibre($fecha)
    {
        $horas =  DB::table('horas')
        ->select('horas.*')
        ->whereNotIn('id', function($query) use($fecha){
          $query->select('citas.id_horas')
          ->where('citas.fecha' , $fecha)
          ->from('citas');
        })
        ->get();

        return $horas;
    }

    /**
     * Nos devuelve  la hora actual
     *
     * @param  \Illuminate\Http\Request  $request
     * @param Int $hora
     * @return \Illuminate\Http\Response
     */
    public function showAllEditLibre($hora)
    {

        $horas = DB::table('horas')
        ->select('*')->where('id', $hora)->get();

        return $horas;
    }

    /**
     * Método que nos permite guardar las horas.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
          'hora_inicio' => 'required|string',
          'hora_fin' => 'required|string',
          'denominacion'=> 'required'
        ]);
        Hora::create($request->all());
        return;
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
        'hora_inicio' => 'required|string',
        'hora_fin' => 'required|string',
        'denominacion'=> 'required'
      ]);
      Hora::find($id)->update($request->all());
      return;
    }

    /**
     * Nos permite eliminar un hora
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $hora = Hora::findOrFail($id);
        $hora->delete();
    }
}
