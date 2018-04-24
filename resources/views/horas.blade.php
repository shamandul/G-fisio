@extends('layouts.app')
@section('estilos')
  <link href="{{ asset('css/toastr.css') }}" rel="stylesheet">
@endsection
@section('content')
<div class="container">
  <div class="row">
    <div class="col-sd-12">
      <div class="card">
        <div class="card-body">
           <img class="card-img-top img-tamano" src="{{ asset('img/horas.svg') }}" alt="Card image cap">
        </div>
      </div>
    </div>
  </div>
  <br>
  <div  id="hora-crud" class="row">
    <div class="col-sm-12">
      <h1 class="page-header">Horas</h1>
      <div class="col-sm-12">
          <a class="btn btn-primary pull-right" data-toggle="modal" v-on:click.prevent="newEstado()">Nuevo servicio</a>
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Hora inicio</th>
                <th>Hora fin</th>
                <th>Denominación</th>
                <th colspan="2">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="hora in horas">
                <td>@{{hora.id}}</td>
                <td>@{{hora.hora_inicio}}</td>
                <td>@{{hora.hora_fin}}</td>
                <td>@{{hora.denominacion}}</td>
                <td width="10px">
                  <a class="btn btn-warning btn-sm"v-on:click.prevent="editHora(hora)">Editar</a>
                </td>
                <td width="10px">
                  <a class="btn btn-danger btn-sm" v-on:click.prevent="deleteHora(hora)">Eliminar</a>
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
    @include('horas.crear-horas')
    @include('horas.editar-horas')
  </div>
</div>
@endsection
@section('script')
  <!-- Cargamos toastr y nuestro Script -->
  <script src="{{ asset('js/toastr.js') }}"></script>
  <script src="{{ asset('js/script-horas.js') }}"></script>
@endsection
