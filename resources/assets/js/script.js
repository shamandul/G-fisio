// require('./bootstrap');
// obtener los Servicios

new Vue({
  el:'#servicio-crud',
  created: function(){
    this.getServicios();
  },
  data: {
    servicios: [],
    pagination:{
      'total':0,
      'current_page':0,
      'per_page':0,
      'last_page':0,
      'from':0,
      'to':0
    },
    nuevoServicio: '',
    nuevaDescripcion:'',
    nuevoPrecio:'',
    errors: [],
    datosServicio:{'id' : '', 'nombre_servicio' : '', 'descripcion': '', 'precio' : ''},
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
    getServicios: function(page){
      // Obtenemos todos los servicios
      var urlServicios = 'servicios?page=' + page;
      axios.get(urlServicios).then(response=>{
        this.servicios = response.data.servicios.data,
        this.pagination =response.data.pagination
      });
    },
    deleteServicio: function(servicio){
      //elimina un servicio
      var url = 'servicios/' + servicio.id;
      axios.delete(url).then(response=>{
        this.getServicios();
        toastr.success('El servicio fue eliminado correctamente');
      });
    },
    editServicio: function(servicio){
      // editamos un servicio
      this.datosServicio.id = servicio.id;
      this.datosServicio.nombre_servicio = servicio.nombre_servicio;
      this.datosServicio.descripcion = servicio.descripcion;
      this.datosServicio.precio = servicio.precio;
      $('#editar').modal('show');
    },
    updateServicio: function(id){
      //actualizamos un servicio
      var url = 'servicios/' + id;
      axios.put( url, this.datosServicio).then(response => {
          this.getServicios();
          this.datosServicio = {'id' : '', 'nombre_servicio' : '', 'descripcion': '', 'precio' : ''};
          this.errors = [];
          $('#editar').modal('hide');
          toastr.success('El servicio se ha actualizado correctamente');
      }).catch(error => {
        this.errors= error.response.data;
      });
    },
    createServicio: function(){
      // Método para crear un nuevo servicio
          var url = 'servicios';
          axios.post( url, {
            nombre_servicio: this.nuevoServicio,
            descripcion: this.nuevaDescripcion,
            precio: this.nuevoPrecio
          }).then(response => {
              this.getServicios();
              this.nuevoServicio = '';
              this.nuevaDescripcion = '';
              this.nuevoPrecio = '';
              this.errors = [];
              $('#nuevo').modal('hide');
              toastr.success('El servicio fue guardado correctamente');
          }).catch(error => {
            this.errors= error.response.data;
          });
    },
    changePage: function(page){
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getServicios(page);
    },
    newEstado: function(){
      $('#nuevo').modal('show');
    }

  }
});
