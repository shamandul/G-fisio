// require('./bootstrap');
// obtener los Salas

new Vue({
  el:'#sala-crud',
  created: function(){
    this.getSalas();
  },
  data: {
    salas: [],
    pagination:{
      'total':0,
      'current_page':0,
      'per_page':0,
      'last_page':0,
      'from':0,
      'to':0
    },
    nuevoSala: '',
    errors: [],
    datosSala:{'id' : '', 'nombre_sala' : ''},
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
    getSalas: function(page){
      // Obtenemos todos los salas
      var urlSalas = 'salas?page=' + page;
      axios.get(urlSalas).then(response=>{
        this.salas = response.data.salas.data,
        this.pagination =response.data.pagination
      });
    },
    deleteSala: function(sala){
      //elimina un sala
      var url = 'salas/' + sala.id;
      axios.delete(url).then(response=>{
        this.getSalas();
        toastr.success('La sala fue eliminada correctamente');
      });
    },
    newSala: function(){
      $('#nuevo').modal('show');
    },
    editSala: function(sala){
      // editamos un sala
      this.datosSala.id = sala.id;
      this.datosSala.nombre_sala = sala.nombre_sala;
      $('#editar').modal('show');
    },
    updateSala: function(id){
      //actualizamos un sala
      var url = 'salas/' + id;
      axios.put( url, this.datosSala).then(response => {
          this.getSalas();
          this.datosSala = {'id' : '', 'nombre_sala' : ''};
          this.errors = [];
          $('#editar').modal('hide');
          toastr.success('La sala se ha actualizado correctamente');
      }).catch(error => {
        this.errors= error.response.data;
      });
    },
    createSala: function(){
      // Método para crear una nueva sala
          var url = 'salas';
          axios.post( url, {
            nombre_sala: this.nuevoSala
          }).then(response => {
              this.getSalas();
              this.nuevoSala = '';
              this.errors = [];
              $('#nuevo').modal('hide');
              toastr.success('La sala fue guardada correctamente');
          }).catch(error => {
            this.errors= error.response.data;
          });
    },
    changePage: function(page){
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getSalas(page);
    }

  }
});
