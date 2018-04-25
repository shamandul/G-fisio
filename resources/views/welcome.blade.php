@extends('layouts.app')

@section('estilos')
  <link href="{{ asset('css/estilos-welcome.css') }}" rel="stylesheet">
@endsection
@section('content')
  <div class="contenedor">
    <div id="cabecera">
      <div class="flex-center title">
        <h1>G-Fisio</h1>
        <p>Por su salud</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="texto">
      <h1>G-Fisio</h1>
      <p>
        G-Fisio es una aplicación web que nos permite gestionar un centro de Fisioterapia.
      </p>
      <p>
        Los clientes podrán crear citas que más tarde serán aceptada por los empleados.
        Los clientes podrán ver sus citas y ver en que estado se encuentran.
      </p>
      <p>
        Los clientes podrá ver las citas que tienen pendiente tanto para realizar como para aceptar.
      </p>
      <p>
        Tanto los clientes como los enpleados podrán ver sus facturas y en el estado en que se encuentran.
      </p>
      <br>
    </div>
</div>
<br>
  <div class="contenedor">
    <div id="seccion1">
    </div>
  </div>
  <div class="container">
    <div class="texto">
      <h1>Acerca de G-fisio</h1>
      <p>
        Esta aplicación ha sido realizada como Proyecto Final del  módulo de Desarrollo de
        Aplicaciones Web.
      </p>
      <p>
        Es una aplicación realizada fundamentalmente en el lado del servido en Laravel y en el lado del cliente en Vuejs.
      </p>
      <h3>Tecnologías utilizadas</h3>
      <div class="lista">
        <ul>
          <li>Lado del Servidor</li>
          <ul>
            <li>Php</li>
            <li>Laravel</li>
            <li>MySql</li>
          </ul>
          <li>Lado del Cliente</li>
          <ul>
            <li>HTML 5</li>
            <li>JQuery</li>
            <li>vuejs</li>
            <li>boostrap 4</li>
            <li>Plantillas Blade</li>
            <li>Emacs script 6</li>
            <li>Toastr</li>
            <li>Barryvdh\DomPDF</li>
          </ul>
        </ul>
        <br>
      </div>
    </div>
</div>
<br>
@endsection

@section('script')
  <script src="{{ asset('js/welcome.js') }}"></script>
  @endsection
