@extends('layouts.app')
@section('estilos')
  <link href="{{ asset('css/toastr.css') }}" rel="stylesheet">
@endsection
@section('content')
<div class="container">
  <div  id="factura-crud" class="row">
    <div class="col-sm-12">
      <h1 class="page-header">Facturas</h1>
      <div class="col-sm-12">
          <a class="btn btn-primary pull-right" data-toggle="modal" v-on:click.prevent="newEstadoVista()">Nueva factura</a>
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha de emisión</th>
                <th>Estado</th>
                <th>Fecha de pago</th>
                <th>ID de la cita</th>
                <th colspan="2">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="factura in facturas">
                <td>@{{factura.id}}</td>
                <td>@{{factura.fecha_emision}}</td>
                <td>@{{factura.estado}}</td>
                <td>@{{factura.fecha_pago}}</td>
                <td>@{{factura.id_citas}}</td>
                <td width="10px">
                  <a class="btn btn-warning btn-sm"v-on:click.prevent="editFactura(factura)">Editar</a>
                </td>
                <td width="10px">
                  <a class="btn btn-danger btn-sm" v-on:click.prevent="deleteFactura(factura)">Eliminar</a>
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
  @include('facturas.crear-facturas')
  @include('facturas.editar-facturas')
  {{-- @include('citas.delete-facturas') --}}
</div>
@endsection
@section('script')
  <!-- Cargamos Vue, Axios, toastr y nuestro Script -->
  <script src="{{ asset('js/jquery.js') }}"></script>
  <script src="{{ asset('js/vue.js') }}"></script>
  <script src="{{ asset('js/axios.js') }}"></script>
  <script src="{{ asset('js/toastr.js') }}"></script>
  <script src="{{ asset('js/script-facturas.js') }}"></script>
@endsection