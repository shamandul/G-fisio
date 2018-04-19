<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
    /**
     * Función que nos permite crear un pdf con una factura
     */
    public function crearPdf($id){
     $factura = DB::table('citas')
     ->join('servicios', 'citas.id_servicios', '=', 'servicios.id')
     ->join('salas', 'citas.id_salas', '=', 'salas.id')
     ->join('horas', 'citas.id_horas', '=', 'horas.id')
     ->join('users as u', 'citas.id_users', '=', 'u.id')
     ->join('atiende', 'citas.id', '=', 'atiende.id_citas')
     ->join('users as e', 'atiende.id_users', '=', 'e.id')
     ->join('facturas', 'facturas.id_citas', '=', 'citas.id')
     ->select('citas.fecha', 'servicios.nombre_servicio', 'horas.hora_inicio','horas.hora_fin',
       'salas.nombre_sala', 'u.nombre', 'u.apellidos', 'e.nombre as nombre_empleado',
       'e.apellidos as apellidos_empleado', 'servicios.precio', 'servicios.descripcion',
       'facturas.fecha_emision','facturas.estado')
       ->where('citas.id', $id)->get();

       $factura[0]->fecha_emision = str_replace('-', '/', date('d-m-Y',strtotime($factura[0]->fecha_emision)));
       $factura[0]->fecha = str_replace('-', '/', date('d-m-Y',strtotime($factura[0]->fecha)));
     $pdf = \PDF::loadView('pdf.reporte_factura', ['datos' => $factura]);
     return $pdf->stream('crearPdf');
   }

}
