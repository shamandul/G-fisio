<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Servicio;

class ServiciosController extends Controller
{
    /**
     * Nos devuelve todos los Servicios y los datos para la paginación
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $servicios = Servicio::orderBy('id','DESC')->paginate(4);

        return [
          'pagination' => [
            'total'        => $servicios->total(),
            'current_page' => $servicios->currentPage(),
            'per_page'     => $servicios->perPage(),
            'last_page'    => $servicios->lastPage(),
            'from'         => $servicios->firstItem(),
            'to'           => $servicios->lastPage(),
          ],
          'servicios' => $servicios
        ];
    }


    /**
     * Método que nos permite guardar los servicios.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
          'nombre_servicio' => 'required',
          'descripcion' => 'required',
          'precio' => 'required'
        ]);
        Servicio::create($request->all());
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
        'nombre_servicio' => 'required',
        'descripcion' => 'required',
        'precio' => 'required'
      ]);
      Servicio::find($id)->update($request->all());
      return;
    }

    /**
     * Nos permite eliminar un servicio
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $servicio = Servicio::findOrFail($id);
        $servicio->delete();
    }
}
