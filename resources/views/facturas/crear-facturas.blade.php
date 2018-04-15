<form method="POST" v-on:submit.prevent="createFactura">
<div class="modal fade" id="nuevo">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Nueva Factura</h4>
      </div>
      <div class="modal-body">
          <label for="fecha_emision">Fecha de emisión</label>
          <input type="date" name="fecha_emision" class="form-control" v-model="newFechaEmision" required>

          <label for="estado">Estado</label><br/>
          <select class="custom-select" name="estado" v-model="newEstado" required>
            <option selected value="pendiente">Pendiente</option>
            <option value="pagado">Pagado</option>
            <option value="incidencia">Incidencia</option>
           </select><br/>

          <label for="fecha_pago">Fecha del pago</label>
          <input type="date" name="fecha_pago" class="form-control" v-model="newFechaPago">

          <label for="cita">Cita</label><br/>
          <select class="custom-select" name="cita" v-model="newIdCita" required>
            <option v-for="cita in citas" v-bind:value="cita.id">@{{cita.fecha}} @{{cita.nombre}} @{{cita.apellidos}}</option>
           </select>
      

          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Guardar">
      </div>
    </div>

  </div>

</div>

</form>
