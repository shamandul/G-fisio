<form method="POST" v-on:submit.prevent="updateFactura(datosFactura.id)">
  <input type="hidden" name="_method" value="PUT">
<div class="modal fade" id="editar">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Editar factura</h4>
      </div>
      <div class="modal-body">
          <label for="fecha-emision">Fecha de Emisión</label>
          <input type="date" name="fecha-emision" class="form-control" v-model="datosFactura.fecha_emision">

          <label for="estado">Servicio</label><br/>
          <select class="custom-select" name="estado" v-model="datosFactura.estado" require>
            <option v-bind:value="datosFactura.estado" autocapitalized="on">@{{datosFactura.estado}}</option>
            <option selected value="pendiente">Pendiente</option>
            <option value="pagado">Pagado</option>
            <option value="incidencia">Incidencia</option>
          </select><br/>

          <label for="fecha_pago">Fecha del pago</label>
          <input type="date" name="fecha_pago" class="form-control" v-model="datosFactura.fecha_pago">

          <label for="id_citas">ID de la cita</label>
          <input type="text" name="id_citas" class="form-control" v-model="datosFactura.id_citas" disabled>

          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Actualizar">
      </div>
    </div>

  </div>

</div>

</form>
