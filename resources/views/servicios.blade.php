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
           <img class="card-img-top img-tamano" src="{{ asset('img/servicios.svg') }}" alt="Card image cap">
        </div>
      </div>
    </div>
  </div>
  <br>
  <div  id="servicio-crud" class="row">
    <div class="col-sm-12">
      <h1 class="page-header">Servicios</h1>
      <div class="col-sm-12">
          <a href="#" class="btn btn-primary pull-right" data-toggle="modal" v-on:click.prevent="newEstado()">Nuevo servicio</a>
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre del servicio</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th colspan="2">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="servicio in servicios">
                <td>@{{servicio.id}}</td>
                <td>@{{servicio.nombre_servicio}}</td>
                <td>@{{servicio.descripcion}}</td>
                <td>@{{servicio.precio}}</td>
                <td width="10px">
                  <a href="#" class="btn btn-warning btn-sm"v-on:click.prevent="editServicio(servicio)">Editar</a>
                </td>
                <td width="10px">
                  <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteServicio(servicio)">Eliminar</a>
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
    @include('servicios.crear-servicios')
    @include('servicios.editar-servicios')
  </div>
</div>
@endsection
@section('script')
  <!-- Cargamos Vue, Axios y nuestro Script -->
  {{-- <script src="{{ asset('js/jquery.js') }}"></script> --}}
  {{-- <script src="{{ asset('js/vue.js') }}"></script> --}}
  {{-- <script src="{{ asset('js/axios.js') }}"></script> --}}
  <script src="{{ asset('js/toastr.js') }}"></script>
  <script src="{{ asset('js/script.js') }}"></script>
@endsection
