<form method="POST" v-on:submit.prevent="updateHora(datosHora.id)">
  <input type="hidden" name="_method" value="PUT">
<div class="modal fade" id="editar">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Editar horas</h4>
      </div>
      <div class="modal-body">
          <label for="hora_inicio">Hora de Inicio</label>
          <input type="text" name="hora_inicio" class="form-control" v-model="datosHora.hora_inicio">

          <label for="hora_fin">Hora def fin</label>
          <input type="text" name="hora_fin" class="form-control" v-model="datosHora.hora_fin">

          <label for="denominacion">Denominación</label>
          <input type="text" name="denominacion" class="form-control" v-model="datosHora.denominacion">
          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Actualizar">
      </div>
    </div>

  </div>

</div>

</form>
