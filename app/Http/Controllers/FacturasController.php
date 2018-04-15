<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Factura;

class FacturasController extends Controller
{
    /**
     * Nos devuelve todas las Facturas y los datos para la paginación
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $facturas = Factura::orderBy('id','DESC')->paginate(4);

      return [
        'pagination' => [
          'total'        => $facturas->total(),
          'current_page' => $facturas->currentPage(),
          'per_page'     => $facturas->perPage(),
          'last_page'    => $facturas->lastPage(),
          'from'         => $facturas->firstItem(),
          'to'           => $facturas->lastPage(),
        ],
        'facturas' => $facturas
      ];
    }



    /**
     *  Método que nos permite guardar la factura.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $this->validate($request,[
        'fecha_emision' => 'required',
        'estado' => 'required'
      ]);
      Factura::create($request->all());
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
        'fecha_emision' => 'required',
        'estado' => 'required'
      ]);
      Factura::find($id)->update($request->all());
      return;
    }

    /**
     * Nos permite eliminar una Factura
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $factura = Factura::findOrFail($id);
        $factura->delete();
    }
}
