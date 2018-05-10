@extends('layouts.app')
@section('estilos')
  <link href="{{ asset('css/toastr.css') }}" rel="stylesheet">
  <link href="{{ asset('css/estilos-citas.css') }}" rel="stylesheet">
@endsection
@section('content')
<div class="container">
  <div class="row">
    <div class="col-sd-12">
      <div class="card">
        <div class="card-body">
           <img class="card-img-top img-tamano" src="{{ asset('img/calendario.svg') }}" alt="Card image cap">
        </div>
      </div>
    </div>
  </div>
  <br>
  <div  id="cita-crud" class="row">
    <div class="col-sm-12">
      <h1 class="page-header">Citas</h1>
      <div class="col-sm-12">
        @if(Auth::user()->role  != 'cliente')
          <a class="btn btn-success pull-left" data-toggle="modal" v-on:click.prevent="newBuscarPorCliente()">Clientes <img src="img/ic_search_black_24px.svg" alt="Buscar por pendientes" /></a>
          <a class="btn btn-warning pull-left" data-toggle="modal" v-on:click.prevent="newBuscarPorEmpleados()">Empleados <img src="img/ic_search_black_24px.svg" alt="Buscar por pendientes" /></a>
          <a class="btn btn-danger pull-left" data-toggle="modal" v-on:click.prevent="newBuscarPorPendientes()">Pendientes <img src="img/ic_search_black_24px.svg" alt="Buscar por pendientes" /></a>
        @endif
          <a class="btn btn-primary pull-right" data-toggle="modal" v-on:click.prevent="newCita()">Nueva cita</a>
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Servicio</th>
                <th>Nombre de cliente</th>
                <th>Horario</th>
                <th>Sala</th>
                <th>Nombre de empleado</th>
                <th colspan="2">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cita in citas">
                <td>@{{cita.id}}</td>
                <td>@{{cita.fecha}}</td>
                <td v-if="cita.estado == 'pendiente'" class="fondo-rojo">@{{cita.estado}}</td>
                <td v-else-if="cita.estado == 'confirmado'" class="fondo-verde">@{{cita.estado}}</td>
                <td v-else class="fondo-amarillo">@{{cita.estado}}</td>
                <td>@{{cita.nombre_servicio}}</td>
                <td>@{{cita.nombre}} @{{cita.apellidos}}</td>
                <td>@{{cita.denominacion}}</td>
                <td>@{{cita.nombre_sala}}</td>
                <td>@{{cita.nombre_empleado}} @{{cita.apellidos_empleado}}</td>
                <td width="10px">
                  <a class="btn btn-warning btn-sm" v-on:click.prevent="editCita(cita)">Editar</a>
                </td>
                <td width="10px">
                  <a class="btn btn-danger btn-sm" v-on:click.prevent="getEliminarCita(cita)">Eliminar</a>
                </td>
              </tr>
            </tbody>
          </table>
          <nav>
            <ul class="pagination">
              <li v-if="pagination.current_page > 1">
                <a @click.prevent="changePage(pagination.current_page -1)">
                  <span>Atras</span>
                </a>
              </li>

              <li v-for="page in pagesNumber" v-bind:class="[page == isActived ? 'active': '']">
                <a @click.prevent="changePage(page)">
                  @{{ page}}
                </a>
              </li>

              <li v-if="pagination.current_page < pagination.last_page">
                <a @click.prevent="changePage(pagination.current_page +1)">
                  <span>Siguiente</span>
                </a>
              </li>
            </ul>
          </nav>
      </div>

  </div>
  @include('citas.crear-citas')
  @include('citas.editar-citas')
  @include('citas.delete-citas')
  @include('citas.buscar-clientes')
  @include('citas.buscar-empleados')
</div>
@endsection
@section('script')
  <!-- Cargamos  toastr y nuestro Script -->
  <script src="{{ asset('js/toastr.js') }}"></script>
  <script src="{{ asset('js/script-citas.js') }}"></script>
@endsection
