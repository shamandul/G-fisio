// require('./bootstrap');
// obtener los Citas

new Vue({
  el:'#cita-crud',
  created: function(){
    // this.getRegistrado();
    this.getServicios();
    this.getCitas();
    this.getHoras();
    this.getSalas();
    this.getEmpleados();
  },
  data: {
    citas: [],
    servicios: [],
    registrados:[],
    empleados: [],
    salas: [],
    horas: [],
    atiende:[],
    pagination:{
      'total':0,
      'current_page':0,
      'per_page':0,
      'last_page':0,
      'from':0,
      'to':0
    },
    newFecha: '',
    newEstado:'pendiente',
    newIdServicio: '',
    newIdSala: '',
    newIdHora: '',
    newIdEmpleado: '',
    id_atiende: '',
    errors: [],
    datosCita:{
      'id' : '',
     'fecha' : '',
     'estado': '',
     'id_servicios': '',
     'id_users': '',
     'id_salas': '',
     'id_horas': '',
     'nombre_servicio': '',
     'denominacion': '',
     'nombre_sala': '',
     'nombre': '',
     'apellidos': '',
     'id_empleado': ''
   },
   datosAtiende: {
     'id_citas': '',
     'id_users': ''
   },
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
      var url = 'users/showUserSession';
      var urlCitas='';
      axios.get(url).then(response=>{
        this.registrados = response.data

        if(this.registrados[0].role == 'empleado' || this.registrados[0].role == 'admin' ){
          urlCitas = 'citas?page=' + page;
        axios.get(urlCitas).then(response=>{
          this.citas = response.data.citas.data,
          this.pagination =response.data.pagination
          });
        }else{
          urlCitas = 'citas/showAllUser/'+ this.registrados[0].id +'?page=' + page;
          axios.get(urlCitas).then(response=>{
            this.citas = response.data.citas.data,
            this.pagination =response.data.pagination
          });
        }
      });
    },
    getServicios: function(){
      var url = 'servicios/showAll';
      axios.get(url).then(response=>{
        this.servicios = response.data
      });
    },
    getRegistrado: function(){
      var url = 'users/showUserSession';
      axios.get(url).then(response=>{
        this.registrados = response.data
      });
    },
    getSalas: function(){
      var url = 'salas/showAll';
      axios.get(url).then(response=>{
        this.salas = response.data
      });
    },
    getEmpleados: function(){
      var url = 'users/showEmpleados';
      axios.get(url).then(response=>{
        this.empleados = response.data
      });
    },
    getHoras: function(){
      var url = 'horas/showAll';
      axios.get(url).then(response=>{
        this.horas = response.data
      });
    },
    deleteAtiende: function(id){
      var url = 'atiende/' + id;
      axios.delete(url).then(response=>{
        // toastr.success('La cita fue eliminada correctamente Atiende');
      }).catch(error => {
        // this.errors= error.response.data;
        // toastr.error('La cita no se eliminó en Atiende');
      });
    },
    deleteCita: function(cita){
      //elimina una cita

      var url = 'citas/' + cita.id;
      axios.delete(url).then(response=>{
        this.getCitas();
        toastr.success('La cita fue eliminada correctamente');
      }).catch(error => {
        // this.errors= error.response.data;
        toastr.error('La cita no se eliminó');
      });
    },
    editCita: function(cita){
      // editamos una cita
      this.datosCita.id = cita.id;
      this.datosCita.fecha = cita.fecha;
      this.datosCita.estado = cita.estado;
      this.datosCita.id_servicios = cita.id_servicios;
      this.datosCita.id_salas = cita.id_salas;
      this.datosCita.id_horas = cita.id_horas;
      this.datosCita.id_empleado = cita.id_empleado;
      this.datosCita.id_users = cita.id_users;
      this.datosAtiende.id_users = this.datosCita.id_empleado;
      this.datosAtiende.id_citas = this.datosCita.id;
      this.buscarAtiende();
      $('#editar').modal('show');
    },
    buscarAtiende: function(){
      var url= 'atiende/buscar?id_citas='+ this.datosCita.id + '&id_users=' + this.datosCita.id_empleado;
      axios.get(url).then(response => {
        this.id_atiende = response.data;
      });
    },
    getEliminarCita: function(cita){
      this.datosCita.id = cita.id;
      this.datosCita.fecha = cita.fecha;
      this.datosCita.estado = cita.estado;
      this.datosCita.id_servicios = cita.id_servicios;
      this.datosCita.id_salas = cita.id_salas;
      this.datosCita.id_horas = cita.id_horas;
      this.datosCita.id_empleado = cita.id_empleado;
      this.datosCita.id_users = cita.id_users;
      this.datosAtiende.id_users = cita.id_empleado;
      this.datosAtiende.id_citas = cita.id;
      this.buscarAtiende();
      $('#delete').modal('show');
    },
    aceptarCita: function(){
      this.deleteAtiende(this.id_atiende);
      this.deleteCita(this.datosCita);
      $('#delete').modal('hide');

    },
    cancelarCita: function(){
      $('#delete').modal('hide');
    },
    updateAtiende: function(id){
      var url = 'atiende/'+ id;
      axios.put(url, {
        id_citas: this.datosCita.id,
        id_users: this.datosCita.id_empleado,
      }).catch(error => {
        // this.errors = error.response.data;
        toastr.error('La cita no se ha actualizado atiende');
      });
    },
    updateCita: function(id){
      //this.buscarAtiende();
      this.updateAtiende(this.id_atiende);
      // actualizamos una cita
      var url = 'citas/' + id;
      axios.put( url, this.datosCita).then(response => {
          this.getCitas();
          this.datosCita = {
            'id' : '',
           'fecha' : '',
           'estado': '',
           'id_servicios': '',
           'id_users': '',
           'id_salas': '',
           'id_horas': ''
         };
          this.errors = [];
          $('#editar').modal('hide');
          toastr.success('La cita se ha actualizado correctamente');
      }).catch(error => {
        // this.errors= error.response.data;
        toastr.error('La cita no se ha actualizado');
      });
    },
    createAtiende: function(){
      // Método para crear una nueva atiende
      var url = 'atiende';
      axios.post( url, {
        id_citas: this.datosAtiende.id_citas,
        id_users: this.datosAtiende.id_users,
      }).then(response => {
        this.datosAtiende.id_citas = '';
        this.datosAtiende.id_users = '';
        this.getCitas();
      }).catch(error => {
        //  this.errors= error.response.data;
        toastr.error('La cita no se ha guardado empleados');
      });
    },
    createCita: function(){
      // Método para crear una nueva Cita
          var url = 'citas';
          axios.post( url, {
            fecha: this.newFecha,
            estado: this.newEstado,
            id_servicios: this.newIdServicio,
            id_users: this.registrados[0].id,
            id_salas: this.newIdSala,
            id_horas: this.newIdHora,
          }).then(response => {
              this.datosAtiende.id_citas = response.data;
              this.datosAtiende.id_users = this.newIdEmpleado;
              this.createAtiende();
              this.newFecha = '';
              this.newEstado = 'pendiente';
              this.newIdServicio= '';
              this.newIdSala = '';
              this.newIdHora = '';
              this.errors = [];
              $('#nuevo').modal('hide');
              toastr.success('La cita fue guardada correctamente');
          }).catch(error => {
            // this.errors= error.response.data;
            toastr.error('La cita no se ha guardado');
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
