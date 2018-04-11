<form method="POST" v-on:submit.prevent="createCita">
<div class="modal fade" id="nuevo">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Nueva Cita</h4>
      </div>
      <div class="modal-body">
          <label for="fecha">Fecha de la cita</label>
          <input type="date" name="fecha" class="form-control" v-model="newFecha" required>

          <label for="estado">Estado</label>
          <input type="text" name="estado" class="form-control" v-model="newEstado" required>

          <label for="nombre_servicio">Servicio</label><br/>
          <select class="custom-select" name="nombre_servicio" v-model="newIdServicio" required>
            <option v-for="servicio in servicios" v-bind:value="servicio.id">@{{servicio.nombre_servicio}}</option>
           </select><br/>

           <label for="nombre_sala">Sala</label><br/>
           <select class="custom-select" name="nombre_sala" v-model="newIdSala" required>
             <option v-for="sala in salas" v-bind:value="sala.id">@{{sala.nombre_sala}}</option>
            </select><br/>

            <label for="denominacion">Horario</label><br/>
            <select class="custom-select" name="denominacion" v-model="newIdHora" required>
              <option v-for="hora in horas" v-bind:value="hora.id">@{{hora.denominacion}}</option>
             </select><br/>

             <label for="empleado">Empleado</label><br/>
             <select class="custom-select" name="empleado" v-model="newIdEmpleado" required>
               <option v-for="empleado in empleados" v-bind:value="empleado.id">@{{empleado.nombre}} @{{empleado.apellido}}</option>
              </select>

          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Guardar">
      </div>
    </div>

  </div>

</div>

</form>
