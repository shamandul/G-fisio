<form method="POST" v-on:submit.prevent="createHora">
<div class="modal fade" id="nuevo">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Nueva hora</h4>
      </div>
      <div class="modal-body">
          <label for="hora_inicio">Hora inicio</label>
          <input type="time" name="hora_inicio" class="form-control" v-model="newHoraInicio" required>

          <label for="hora_fin">Hora final</label>
          <input type="time" name="hora_fin" class="form-control" v-model="newHoraFin" required>

          <label for="denominacion">Denominación</label>
          <input type="text" name="denominacion" class="form-control" v-model="newDenominacion" required>

          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Guardar">
      </div>
    </div>

  </div>

</div>

</form>
