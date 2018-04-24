<form method="POST" v-on:submit.prevent="updateUser(datosUser.id)">
  <input type="hidden" name="_method" value="PUT">
<div class="modal fade" id="editar">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Editar usuario</h4>
      </div>
      <div class="modal-body">
          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" class="form-control" v-model="datosUser.nombre" required>

          <label for="apellidos">Apellidos</label>
          <input type="text" name="apellidos" class="form-control" v-model="datosUser.apellidos" required>

          <label for="telefono">telefono</label>
          <input type="text" name="telefono" pattern="[0-9]{9}" class="form-control" v-model="datosUser.telefono" required>

          <label for="direccion">Dirección</label>
          <input type="text" name="direccion" class="form-control" v-model="datosUser.direccion" required>
          @if (Auth::user()->role  == 'admin')
            <label for="role">Rol</label><br/>
            <select class="custom-select" name="role" v-model="datosUser.role" required>
              <option value="cliente">Cliente</option>
              <option value="empleado">Empleado</option>
              <option value="admin">Administrador</option>
            </select><br/>
          @endif
          <label for="email">Correo electrónico</label>
          <input type="email" name="email" class="form-control" v-model="datosUser.email" readonly >
          @if (Auth::user()->role  == 'admin')
          <label for="activo">Estado</label><br/>
          <select class="custom-select" name="activo" v-model="datosUser.activo" required>
            <option value="0">No</option>
            <option value="1">Si</option>
          </select><br/>
          @endif

          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Actualizar">
      </div>
    </div>

  </div>

</div>

</form>
