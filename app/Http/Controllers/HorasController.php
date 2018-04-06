<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        $horas = Hora::orderBy('id','DESC')->get();

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
          'id_citas'=> 'required',
          'id_salas'=> 'required'
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
        'id_citas'=> 'required',
        'id_salas'=> 'required'
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
