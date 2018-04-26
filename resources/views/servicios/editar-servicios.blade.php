<form method="POST" v-on:submit.prevent="updateServicio(datosServicio.id)">
  <input type="hidden" name="_method" value="PUT">
<div class="modal fade" id="editar">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Editar servicio</h4>
      </div>
      <div class="modal-body">
          <label for="nombre_servicio">Nombre del servicio</label>
          <input type="text" name="nombre_servicio" class="form-control" v-model="datosServicio.nombre_servicio" required>

          <label for="descripcion">Descripción</label>
          <input type="text" name="descripcion" class="form-control" v-model="datosServicio.descripcion" required>

          <label for="precio">Precio</label>
          <input type="number" name="precio" class="form-control" v-model="datosServicio.precio" required>
          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Actualizar">
      </div>
    </div>

  </div>

</div>

</form>
