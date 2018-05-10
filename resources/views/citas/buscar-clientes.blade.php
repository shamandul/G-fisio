<form method="POST" v-on:submit.prevent="buscarClientes()">
  <input type="hidden" name="_method" value="PUT">
<div class="modal fade" id="buscarPorClientes">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4>Buscar por Cliente</h4>
      </div>
      <div class="modal-body">

            <label for="user">Cliente</label><br/>
            <select class="custom-select" name="user" v-model="newIdUser" required>
              <option v-for="user in users" v-bind:value="user.id">@{{user.nombre}} @{{user.apellidos}}</option>
            </select>


          <span v-for="error in errors" class="text-danger"> @{{error}} </span>
      </div>
      <div class="modal-footer">
        <input type="submit" class="btn btn-primary" value="Buscar">
      </div>
    </div>

  </div>

</div>

</form>
