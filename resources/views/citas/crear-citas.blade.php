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
          <input type="date" name="fecha" class="form-control" v-model="nuevoFecha">

          <label for="estado">Estado</label>
          <input type="text" name="estado" class="form-control" v-model="nuevaEstado">


          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Guardar">
      </div>
    </div>

  </div>

</div>

</form>
