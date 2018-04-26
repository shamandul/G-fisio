// obtener las horas

new Vue({
  el:'#hora-crud',
  created: function(){
    this.getHoras();
  },
  data: {
    horas: [],
    pagination:{
      'total':0,
      'current_page':0,
      'per_page':0,
      'last_page':0,
      'from':0,
      'to':0
    },
    newHoraInicio: '',
    newHoraFin:'',
    newDenominacion:'',
    errors: [],
    datosHora:{
      'id' : '',
      'hora_inicio' : '',
      'hora_fin': '',
      'denominacion' : ''
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
    getHoras: function(page){
      // Obtenemos todas las horas
      var url = 'horas?page=' + page;
      axios.get(url).then(response=>{
        this.horas = response.data.horas.data,
        this.pagination =response.data.pagination
      });
    },
    deleteHora: function(hora){
      //elimina una hora
      var url = 'horas/' + hora.id;
      axios.delete(url).then(response=>{
        this.getHoras();
        toastr.success('La hora fue eliminada correctamente');
      });
    },
    editHora: function(hora){
      // editamos una hora
      this.datosHora.id = hora.id;
      this.datosHora.hora_inicio = hora.hora_inicio;
      this.datosHora.hora_fin = hora.hora_fin;
      this.datosHora.denominacion = hora.denominacion;
      $('#editar').modal('show');
    },
    updateHora: function(id){
      //actualizamos una hora
      var url = 'horas/' + id;
      axios.put( url, this.datosHora).then(response => {
          this.getHoras();
          this.datosHora = {
            'id' : '',
            'hora_inicio' : '',
            'hora_fin': '',
            'denominacion' : ''
          };
          this.errors = [];
          $('#editar').modal('hide');
          toastr.success('La Hora se ha actualizado correctamente');
      }).catch(error => {
        // this.errors= error.response.data;
        toastr.error('La Hora no se ha actualizado correctamente');
      });
    },
    createHora: function(){
      // Método para crear una nueva hora
          var url = 'horas';
          axios.post( url, {
            hora_inicio: this.newHoraInicio,
            hora_fin: this.newHoraFin,
            denominacion: this.newDenominacion
          }).then(response => {
              this.getHoras();
              this.newHoraInicio = '';
              this.newHoraFin = '';
              this.newDenominacion = '';
              this.errors = [];
              $('#nuevo').modal('hide');
              toastr.success('La hora fue guardado correctamente');
          }).catch(error => {
            // this.errors= error.response.data;
            toastr.error('La Hora no fue guardada');
          });
    },
    changePage: function(page){
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getHoras(page);
    },
    newEstado: function(){
      $('#nuevo').modal('show');
    }

  }
});
