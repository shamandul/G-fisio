<div class="modal fade" id="delete">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Eliminar</h4>
      </div>
      <div class="modal-body">
          <p>
            ¿Estas seguro de querer eliminar la cita?
          </p>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-success" value="Cancelar" v-on:click.prevent="cancelarCita()">
        <input type="submit" class="btn btn-warning" value="Aceptar" v-on:click.prevent="aceptarCita()">
      </div>
    </div>

  </div>

</div>
