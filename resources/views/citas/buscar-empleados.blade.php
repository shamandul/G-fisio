<form method="POST" v-on:submit.prevent="buscarEmpleados()">
  <input type="hidden" name="_method" value="PUT">
<div class="modal fade" id="buscarPorEmpleados">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Buscar por empleados</h4>
      </div>
      <div class="modal-body">

            <label for="empleado">Empleado</label><br/>
            <select class="custom-select" name="empleado" v-model="newIdBuscarEmpleado" required>
              <option v-for="empleado in empleados" v-bind:value="empleado.id">@{{empleado.nombre}} @{{empleado.apellidos}}</option>
            </select>


          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Buscar">
      </div>
    </div>

  </div>

</div>

</form>
