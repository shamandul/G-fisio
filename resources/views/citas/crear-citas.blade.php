<form method="POST" v-on:submit.prevent="createCita">
<div class="modal fade" id="nuevo">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Nueva Cita</h4>
      </div>
      <div class="modal-body">
        <div>
          <label for="fecha">Fecha de la cita</label>
          <input type="date" name="fecha" class="form-control" v-model="newFecha" required>
          <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteFecha()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
        </div>
          <div id="siguienteEstado">
            <label for="estado">Estado</label><br>
            @if( Auth::user()->role  == 'cliente')
              <input type="text" name="estado" class="form-control" v-model="newEstado" readonly>
            @else
              <select class="custom-select" name="estado" v-model="newEstado" required>
                <option selected value="pendiente">Pendiente</option>
                <option value="confirmado">Confirmado</option>
                <option value="incidencia">Incidencia</option>
              </select>
            @endif
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteEstado()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>
          <div id="siguienteServicio">
            <label for="nombre_servicio">Servicio</label><br/>
            <select class="custom-select" name="nombre_servicio" v-model="newIdServicio" required>
              <option v-for="servicio in servicios" v-bind:value="servicio.id">@{{servicio.nombre_servicio}}</option>
            </select>
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteServicio()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>
          <div id="siguienteSala">
            <label for="nombre_sala">Sala</label><br/>
            <select class="custom-select" name="nombre_sala" v-model="newIdSala" required>
              <option v-for="sala in salas" v-bind:value="sala.id">@{{sala.nombre_sala}}</option>
            </select>
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteSala()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>
          <div id="siguienteHorario">
            <label for="denominacion">Horario</label><br/>
            <select class="custom-select" name="denominacion" v-model="newIdHora" required>
              <option v-for="hora in horas" v-bind:value="hora.id">@{{hora.denominacion}}</option>
            </select>
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteHorario()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>
          @if( Auth::user()->role  != 'cliente')
          <div id="siguienteCliente">
              <label for="user">Cliente</label><br/>
              <select class="custom-select" name="user" v-model="newIdUser" required>
                <option v-for="user in users" v-bind:value="user.id">@{{user.nombre}} @{{user.apellidos}}</option>
              </select>
              <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteCliente()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>
        @endif
          <div id="siguienteEmpleado">
            <label for="empleado">Empleado</label><br/>
            <select class="custom-select" name="empleado" v-model="newIdEmpleado" required>
              <option v-for="empleado in empleados" v-bind:value="empleado.id">@{{empleado.nombre}} @{{empleado.apellidos}}</option>
            </select>
            <a href="#" class="btn btn-success btn-sm" v-on:click.prevent="siguienteEmpleado()">Siguiente <img src="img/ic_send_black_24px.svg" alt="" /></a>
          </div>

          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer" id="btn-guardar">
        <input type="submit" class="btn btn-primary" value="Guardar">
      </div>
    </div>

  </div>

</div>

</form>
