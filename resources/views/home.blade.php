@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">G-Fisio</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    Bienvenido a G-Fisio
                </div>
            </div>
        </div>
    </div>
    <div class="row">
      <div class="col-sd-12 col-md-4">
        <div class="card">
          <div class="card-body">
             <img class="card-img-top img-tamano" src="{{ asset('img/calendario.svg') }}" alt="Card image cap">
            <h4 class="card-title">Gestionar Citas</h4>
            <h5 class="card-subtitle mb-2 text-muted">Gestión de citas</h5>
            <p class="card-text">Aquí puede gestionar sus citas. Tanto para pedirla o ver sus estado</p>
            <a href="{{ url('/cita') }}" class="btn btn-primary">Ir a gestió de citas</a>
          </div>
        </div>
      </div>

      <div class="col-sd-12 col-md-4">
        <div class="card">
          <div class="card-body">
             <img class="card-img-top img-tamano" src="{{ asset('img/facturas.svg') }}" alt="Card image cap">
            <h4 class="card-title">Gestionar Facturas</h4>
            <h5 class="card-subtitle mb-2 text-muted">Gestión de facturass</h5>
            <p class="card-text">Aquí puede gestionar las facturas. Puedes ver, modificar, crear y eliminar facturas</p>
            <a href="{{ url('/factura') }}" class="btn btn-primary">Ir a gestió de facturas</a>
          </div>
        </div>
      </div>

      <div class="col-sd-12 col-md-4">
        <div class="card">
          <div class="card-body">
             <img class="card-img-top img-tamano" src="{{ asset('img/usuarios.svg') }}" alt="Card image cap">
            <h4 class="card-title">Gestionar Usuarios</h4>
            <h5 class="card-subtitle mb-2 text-muted">Gestión de usuarios</h5>
            <p class="card-text">Aquí puede gestionar los usuarios. Puedes ver y modificar usuarios</p>
            <a href="{{ url('/usuario') }}" class="btn btn-primary">Ir a gestió de usuarios</a>
          </div>
        </div>
      </div>
    </div>
    <br>
    @if( Auth::user()->role  == 'admin')
    <div class="row">
      <div class="col-sd-12 col-md-4">
        <div class="card">
          <div class="card-body">
             <img class="card-img-top img-tamano" src="{{ asset('img/servicios.svg') }}" alt="Card image cap">
            <h4 class="card-title">Gestionar Servicios</h4>
            <h5 class="card-subtitle mb-2 text-muted">Gestión de servicios</h5>
            <p class="card-text">Aquí puede gestionar los servicios. Puedes ver, modificar, crear y eliminar servicios</p>
            <a href="{{ url('/servicio') }}" class="btn btn-primary">Ir a gestió de servicios</a>
          </div>
        </div>
      </div>

      <div class="col-sd-12 col-md-4">
        <div class="card">
          <div class="card-body">
             <img class="card-img-top img-tamano" src="{{ asset('img/salas.svg') }}" alt="Card image cap">
            <h4 class="card-title">Gestionar Salas</h4>
            <h5 class="card-subtitle mb-2 text-muted">Gestión de salas</h5>
            <p class="card-text">Aquí puede gestionar las salas. Puedes ver, modificar, crear y eliminar salas</p>
            <a href="{{ url('/sala') }}" class="btn btn-primary">Ir a gestió de salas</a>
          </div>
        </div>
      </div>
      <div class="col-sd-12 col-md-4">
        <div class="card">
          <div class="card-body">
             <img class="card-img-top img-tamano" src="{{ asset('img/horas.svg') }}" alt="Card image cap">
            <h4 class="card-title">Gestionar Horas</h4>
            <h5 class="card-subtitle mb-2 text-muted">Gestión de horas</h5>
            <p class="card-text">Aquí puede gestionar las Horas. Puedes ver, modificar, crear y eliminar horas</p>
            <a href="{{ url('/hora') }}" class="btn btn-primary">Ir a gestió de horas</a>
          </div>
        </div>
      </div>
    </div>
  @endif
</div>
<br>
@endsection
