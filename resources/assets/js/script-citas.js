require('./bootstrap');
// obtener los Citas

new Vue({
  el:'#cita-crud',
  created: function(){
    this.getServicios();
    this.getCitas();
  },
  data: {
    citas: [],
    servicios: [],
    pagination:{
      'total':0,
      'current_page':0,
      'per_page':0,
      'last_page':0,
      'from':0,
      'to':0
    },
    nuevoFecha: '',
    nuevaEstado:'',
    nuevoIdServicio: '',
    errors: [],
    datosCita:{'id' : '', 'fecha' : '', 'estado': '', 'id_servicios': ''},
    offset: 3
  },
  computed:{
    isActived: function(){
      return this.pagination.current_page;
    },
    pagesNumber: function(){
      if(!this.pagination.to){
        return [];
      }
      var from = this.pagination.current_page - this.offset;
      if(from < 1){
        from = 1;
      }
      var to = from +( this.offset * 2);
      if(to >= this.pagination.last_page){
        to = this.pagination.last_page;
      }
      var pagesArray =[];
      while(from <= to){
        pagesArray.push(from);
        from++;
      }
      return pagesArray;
    }
  },
  methods: {
    getCitas: function(page){
      // Obtenemos todas las citas
      var urlCitas = 'citas?page=' + page;
      axios.get(urlCitas).then(response=>{
        this.citas = response.data.citas.data,
        this.pagination =response.data.pagination
      });
    },
    getServicios: function(){
      var url = 'servicios/showAll';
      axios.get(url).then(response=>{
        this.servicios = response.data
      });
    },
    deleteCita: function(cita){
      //elimina una cita
      var url = 'citas/' + cita.id;
      axios.delete(url).then(response=>{
        this.getCitas();
        toastr.success('La cita fue eliminada correctamente');
      });
    },
    editCita: function(cita){
      // editamos una cita
      this.datosCita.id = cita.id;
      this.datosCita.fecha = cita.fecha;
      this.datosCita.estado = cita.estado;
      this.datosCita.id_servicios = cita.id_servicios;
      $('#editar').modal('show');
    },
    updateCita: function(id){
      //actualizamos una cita
      var url = 'citas/' + id;
      axios.put( url, this.datosCita).then(response => {
          this.getCitas();
          this.datosCita = {'id' : '', 'fecha' : '', 'estado': '', 'id_servicios': ''};
          this.errors = [];
          $('#editar').modal('hide');
          toastr.success('La cita se ha actualizado correctamente');
      }).catch(error => {
        this.errors= error.response.data;
      });
    },
    createCita: function(){
      // Método para crear una nueva Cita
          var url = 'citas';
          axios.post( url, {
            fecha: this.nuevoFecha,
            estado: this.nuevaEstado,
            id_servicios: 2,
            id_users:1
          }).then(response => {
              this.getCitas();
              this.nuevoFecha = '';
              this.nuevaEstado = '';
              this.nuevoIdServicio= '';
              this.errors = [];
              $('#nuevo').modal('hide');
              toastr.success('La cita fue guardada correctamente');
          }).catch(error => {
            this.errors= error.response.data;
          });
    },
    changePage: function(page){
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getCitas(page);
    },
    newCita: function(){
      $('#nuevo').modal('show');
    }

  }
});
