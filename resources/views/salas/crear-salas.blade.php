
<form method="POST" v-on:submit.prevent="createSala">
<div class="modal fade" id="nuevo">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Nueva sala</h4>
      </div>
      <div class="modal-body">
          <label for="nombre_servicio">Nombre de la sala</label>
          <input type="text" name="nombre_sala" class="form-control" v-model="nuevoSala" required>
          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Guardar">
      </div>
    </div>

  </div>

</div>

</form>
