<form method="POST" v-on:submit.prevent="updateCita(datosCita.id)">
  <input type="hidden" name="_method" value="PUT">
<div class="modal fade" id="editar">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Editar Cita</h4>
      </div>
      <div class="modal-body">
          <div>
            <label for="fecha">fecha de la cita</label>
            <input type="date" name="fecha" class="form-control" v-model="datosCita.fecha" require>
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteEditFecha()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>
          <div id="siguienteEditEstado">
            @if( Auth::user()->role  == 'cliente')
              <label for="estado">Estado</label>
              <input type="text" name="estado" class="form-control" v-model="datosCita.estado" readonly require>
            @else
              <label for="estado">Estado</label><br>
              <select class="custom-select" name="estado" v-model="datosCita.estado" required>
                <option selected value="pendiente">Pendiente</option>
                <option value="confirmado">Confirmado</option>
                <option value="incidencia">Incidencia</option>
              </select>
            @endif
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteEditEstado()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>
          <div id="siguienteEditServicio">
            <label for="nombre_servicio">Servicio</label><br/>
            <select class="custom-select" name="nombre_servicio" v-model="datosCita.id_servicios" require>
              <option v-for="servicio in servicios" v-bind:value="servicio.id">@{{servicio.nombre_servicio}}</option>
            </select>
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteEditServicio()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>
          <div id="siguienteEditSala">
            <label for="nombre_sala">Sala</label><br/>
            <select class="custom-select" name="nombre_sala" v-model="datosCita.id_salas" required>
              <option  v-for="salaAc in salaActual"v-bind:value="salaAc.id">@{{salaAc.nombre_sala}}</option>
              <option v-for="sala in salas" v-bind:value="sala.id">@{{sala.nombre_sala}}</option>
            </select>
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteEditSala()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>
          <div id="siguienteEditHorario">
            <label for="denominacion">Horario</label><br/>
            <select class="custom-select" name="denominacion" v-model="datosCita.id_horas" required>
              <option v-for="horaAc in horaActual" v-bind:value="horaAc.id">@{{horaAc.denominacion}}</option>
              <option v-for="hora in horas" v-bind:value="hora.id">@{{hora.denominacion}}</option>
            </select>
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteEditHorario()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>
          <div id="siguienteEditEmpleado">
            <label for="empleado">Empleado</label><br/>
            <select class="custom-select" name="empleado" v-model="datosCita.id_empleado" required>
              <option v-for="empleadoAc in empleadoActual" v-bind:value="empleadoAc.id">@{{empleadoAc.nombre}} @{{empleadoAc.apellidos}}</option>
              <option v-for="empleado in empleados" v-bind:value="empleado.id">@{{empleado.nombre}} @{{empleado.apellidos}}</option>
            </select>
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteEditEmpleado()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>


          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer" id="btn-actualizar">
        <input type="submit" class="btn btn-primary" value="Actualizar">
      </div>
    </div>

  </div>

</div>

</form>
