// require('./bootstrap');
// obtener las Facturas

new Vue({
  el:'#factura-crud',
  created: function(){
    this.getFacturas();
    this.getCitas();
  },
  data: {
    facturas: [],
    pagination:{
      'total':0,
      'current_page':0,
      'per_page':0,
      'last_page':0,
      'from':0,
      'to':0
    },
    newFechaEmision: '',
    newEstado:'pendiente',
    newFechaPago:'',
    citas: '',
    newIdCita: '',
    errors: [],
    datosCita:{
      'id' : '',
     'fecha' : '',
     'estado': '',
     'id_servicios': '',
     'id_users': '',
     'id_salas': '',
     'id_horas': '',
     'nombre_sala': '',
     'nombre': ''
    },
    datosFactura:{
      'id' : '',
      'fecha_emision' : '',
      'estado': '',
      'fecha_pago' : '',
      'id_citas': ''
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
    getFacturas: function(page){
      // Obtenemos todas las Facturas
      var url = 'facturas?page=' + page;
      axios.get(url).then(response=>{
        this.facturas = response.data.facturas.data,
        this.pagination =response.data.pagination
      });
    },
    getCitas: function(page){
      // Obtenemos todas las citas
      var urlCitas = 'citas/citasInNotFacturas';
      axios.get(urlCitas).then(response=>{
        this.citas = response.data.citas
      });
    },
    deleteFactura: function(factura){
      //elimina una Factura
      var url = 'facturas/' + factura.id;
      axios.delete(url).then(response=>{
        this.getFacturas();
        toastr.success('La factura fue eliminada correctamente');
      });
    },
    editFactura: function(factura){
      // editamos una factura
      this.datosFactura.id = factura.id;
      this.datosFactura.fecha_emision = factura.fecha_emision;
      this.datosFactura.estado = factura.estado;
      this.datosFactura.fecha_pago = factura.fecha_pago;
      this.datosFactura.id_citas = factura.id_citas;
      $('#editar').modal('show');
    },
    updateFactura: function(id){
      //actualizamos una Factura
      var url = 'facturas/' + id;
      axios.put( url, this.datosFactura).then(response => {
          this.getFacturas();
          this.datosFactura = {
             'id' : '',
            'fecha_emision' : '',
            'estado': 'pendiente',
            'fecha_pago' : '',
            'id_citas': ''
          };
          this.errors = [];
          $('#editar').modal('hide');
          toastr.success('la factura se ha actualizado correctamente');
      }).catch(error => {
        // this.errors= error.response.data;
        toastr.error('La factura no se ha actualizado');
      });
    },
    createFactura: function(){
      // Método para crear una nueva factura
          var url = 'facturas';
          axios.post( url, {
            fecha_emision: this.newFechaEmision,
            estado: this.newEstado,
            fecha_pago: this.newFechaPago,
            id_citas: this.newIdCita
          }).then(response => {
              this.getFacturas();
              this.newFechaEmision = '';
              this.newEstado = '';
              this.newFechaPago = '';
              this.newIdCita = '';
              this.errors = [];
              $('#nuevo').modal('hide');
              toastr.success('la factura fue guardada correctamente');
          }).catch(error => {
            // this.errors= error.response.data;
            toastr.success('la factura no fue guardada');
          });
    },
    changePage: function(page){
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getServicios(page);
    },
    newEstadoVista: function(){
      var hoy = new Date();
      var dia = hoy.getDate();
      if (dia<10){
        dia = '0' + dia;
      }
      var mes = hoy.getMonth() + 1;
      if (mes<10){
        mes = '0' + mes;
      }
      this.newFechaPago = hoy.getFullYear() + '-'+ mes  + '-' + dia;
      $('#nuevo').modal('show');
    }

  }
});
