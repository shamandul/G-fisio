@extends('layouts.app')
@section('estilos')
  <link href="{{ asset('css/toastr.css') }}" rel="stylesheet">
@endsection
@section('content')
<div class="container" id="usuarios-crud">

    <div class="row">
      <div class="col-sd-12">
        <div class="card">
          <div class="card-body">
             <img class="card-img-top img-tamano" src="{{ asset('img/usuarios.svg') }}" alt="Card image cap">
          </div>
        </div>
      </div>
    </div>
    <br>
    @if( Auth::user()->role  != 'admin')
    <div class="row">
          <div class="col-sd-12 col-md-5">
            <h4>Nombre</h4>
            <p>@{{datosUser.nombre}}</p>
            <h4>Apellidos</h4>
            <p>@{{datosUser.apellidos}}</p>
            <h4>Teléfono</h4>
            <p>@{{datosUser.telefono}}</p>
          </div>
          <div class="col-sd-12 col-md-5">
            <h4>Dirección</h4>
            <p>@{{datosUser.direccion}}</p>
            <h4>Role</h4>
            <p>@{{datosUser.role}}</p>
            <h4>Correo electrónico</h4>
            <p>@{{datosUser.email}}</p>
        </div>
        <div class="col-sd-12 col-md-2">
          <a class="btn btn-warning btn-lg" v-on:click.prevent="edit()">Editar</a>
      </div>
    </div>
  @else
      <div   class="row">
        <div class="col-sm-12">
          <h1 class="page-header">Usuarios</h1>
          <div class="col-sm-12">
              <table class="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th>Role</th>
                    <th>E-mail</th>
                    <th>Estado</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users">
                    <td>@{{user.id}}</td>
                    <td>@{{user.nombre}}</td>
                    <td>@{{user.apellido}}</td>
                    <td>@{{user.telefono}}</td>
                    <td>@{{user.direccion}}</td>
                    <td>@{{user.role}}</td>
                    <td>@{{user.email}}</td>
                    <td v-if="user.activo == 0"><img src="img/ic_thumb_down_black_24px.svg" alt="No" /></td>
                    <td v-if="user.activo == 1"><img src="img/ic_thumb_up_black_24px.svg" alt="Si" /></td>
                    <td width="10px">
                      <a class="btn btn-warning btn-sm" v-on:click.prevent="editUsuario(user)">Editar</a>
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
  @endif
  @include('usuarios.editar-usuario')
</div>
<br>
@endsection
@section('script')
  <!-- Cargamos toastr y nuestro Script -->
  <script src="{{ asset('js/toastr.js') }}"></script>
  <script src="{{ asset('js/script-users.js') }}"></script>
@endsection
