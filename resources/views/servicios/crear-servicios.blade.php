<form method="POST" v-on:submit.prevent="createServicio">
<div class="modal fade" id="nuevo">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Nuevo servicio</h4>
      </div>
      <div class="modal-body">
          <label for="nombre_servicio">Nombre del servicio</label>
          <input type="text" name="nombre_servicio" class="form-control" v-model="nuevoServicio">

          <label for="descripcion">descripción</label>
          <input type="text" name="descripcion" class="form-control" v-model="nuevaDescripcion">

          <label for="precio">Precio</label>
          <input type="text" name="precio" class="form-control" v-model="nuevoPrecio">
          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Guardar">
      </div>
    </div>

  </div>

</div>

</form>
