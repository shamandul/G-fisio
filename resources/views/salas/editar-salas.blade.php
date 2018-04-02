<form method="POST" v-on:submit.prevent="updateSala(datosSala.id)">
  <input type="hidden" name="_method" value="PUT">
<div class="modal fade" id="editar">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Editar sala</h4>
      </div>
      <div class="modal-body">
          <label for="nombre_servicio">Nombre de la sala</label>
          <input type="text" name="nombre_sala" class="form-control" v-model="datosSala.nombre_sala">
          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Actualizar">
      </div>
    </div>

  </div>

</div>

</form>
