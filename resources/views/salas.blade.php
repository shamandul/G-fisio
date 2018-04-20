@extends('layouts.app')
@section('estilos')
  <link href="{{ asset('css/toastr.css') }}" rel="stylesheet">
@endsection
@section('content')
<div class="container">
  <div  id="sala-crud" class="row">
    <div class="col-sm-12">
      <h1 class="page-header">Salas</h1>
      <div class="col-sm-12">
          <a class="btn btn-primary pull-right" data-toggle="modal" v-on:click.prevent="newSala()">Nueva sala</a>
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre del sala</th>
                <th colspan="2">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sala in salas">
                <td>@{{sala.id}}</td>
                <td>@{{sala.nombre_sala}}</td>
                <td width="10px">
                  <a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editSala(sala)">Editar</a>
                </td>
                <td width="10px">
                  <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteSala(sala)">Eliminar</a>
                </td>
              </tr>
            </tbody>
          </table>
          <nav>
            <ul class="pagination">
              <li v-if="pagination.current_page > 1">
                <a href="#" @click.prevent="changePage(pagination.current_page -1)">
                  <span>Atras</span>
                </a>
              </li>

              <li v-for="page in pagesNumber" v-bind:class="[page == isActived ? 'active': '']">
                <a href="#" @click.prevent="changePage(page)">
                  @{{ page}}
                </a>
              </li>

              <li v-if="pagination.current_page < pagination.last_page">
                <a href="#" @click.prevent="changePage(pagination.current_page +1)">
                  <span>Siguiente</span>
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </div>
    @include('salas.crear-salas')
    @include('salas.editar-salas')
  </div>
</div>
@endsection
@section('script')
  <!-- Cargamos toastr nuestro Script -->
  <script src="{{ asset('js/toastr.js') }}"></script>
  <script src="{{ asset('js/script-salas.js') }}"></script>
@endsection
