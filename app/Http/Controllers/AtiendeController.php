<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Atiende;

class AtiendeController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $this->validate($request,[
        'id_citas' => 'required',
        'id_users' => 'required'
      ]);

       DB::table('atiende')->insert($request->all());
      return;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id_citas, $id_users
     * @return \Illuminate\Http\Response
     */
    public function buscar(Request $request)
    {
      $id_atiende = DB::table('atiende')
          ->where('id_citas', $request->input('id_citas'))
          ->where('id_users', $request->input('id_users'))
          ->value('id');
          return $id_atiende;
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
    public function update(Request $request, $atiende)
    {
      $this->validate($request,[
        'id_citas' => 'required',
        'id_users' => 'required'
      ]);
      DB::table('atiende')
      ->where('id', $atiende)
      ->update($request->all());
      return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $atiende = DB::table('atiende')
      ->where('id', $id)->delete();
    }
}
