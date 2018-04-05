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
          <label for="fecha">fecha de la ciat</label>
          <input type="date" name="fecha" class="form-control" v-model="datosCita.fecha">

          <label for="estado">Estado</label>
          <input type="text" name="estado" class="form-control" v-model="datosCita.estado">

          <label for="nombre_servicio">Servicio</label><br/>
          <select class="custom-select" name="nombre_servicio" v-model="datosCita.id_servicios">
            {{-- <option select v-model="datosCita.id_servicios"</option> --}}
            <option v-for="servicio in servicios" v-bind:value="servicio.id">@{{servicio.nombre_servicio}}</option>
           </select>

          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Actualizar">
      </div>
    </div>

  </div>

</div>

</form>
