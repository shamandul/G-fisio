// obtener las horas

new Vue({
  el:'#usuarios-crud',
  created: function(){
    this.getUsers();
  },
  data: {
    users: [],
    pagination:{
      'total':0,
      'current_page':0,
      'per_page':0,
      'last_page':0,
      'from':0,
      'to':0
    },
    errors: [],
    datosUser:{
      'id' : '',
      'nombre' : '',
      'apellidos': '',
      'telefono' : '',
      'direccion' : '',
      'role' : '',
      'email': '',
      'activo' : ''
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
    getUsers: function(page){
      // Obtenemos todos los usuarios
      var url = 'users/showUserSession';
      var urlUser='';
      axios.get(url).then(response=>{
        this.registrados = response.data

        if( this.registrados[0].role == 'admin' ){
          urlUser = 'users?page=' + page;
          axios.get(urlUser).then(response=>{
          this.users = response.data.users.data,
          this.pagination =response.data.pagination
          });
        }else{

          this.datosUser.id = this.registrados[0].id;
          this.datosUser.nombre = this.registrados[0].nombre;
          this.datosUser.apellidos = this.registrados[0].apellidos;
          this.datosUser.telefono = this.registrados[0].telefono;
          this.datosUser.direccion = this.registrados[0].direccion;
          this.datosUser.role = this.registrados[0].role;
          this.datosUser.email = this.registrados[0].email;
          this.datosUser.activo = this.registrados[0].activo;
        }

      });

  },
    editUsuario: function(user){
      // editamos un usuario
      this.datosUser.id = user.id;
      this.datosUser.nombre = user.nombre;
      this.datosUser.apellidos = user.apellidos;
      this.datosUser.telefono = user.telefono;
      this.datosUser.direccion = user.direccion;
      this.datosUser.role = user.role;
      this.datosUser.email = user.email;
      this.datosUser.activo = user.activo;
      $('#editar').modal('show');
    },
    edit: function(){
      $('#editar').modal('show');
    },
    updateUser: function(id){
      //actualizamos un usuario
      var url = 'users/' + id;
      axios.put( url, this.datosUser).then(response => {
          this.getUsers();
          this.datosUser = {
            'id' : '',
            'nombre' : '',
            'apellidos': '',
            'telefono' : '',
            'direccion' : '',
            'role' : '',
            'email': '',
            'activo' : ''
          };
          this.errors = [];
          $('#editar').modal('hide');
          toastr.success('El Usuario se ha actualizado correctamente');
      }).catch(error => {
        // this.errors= error.response.data;
        toastr.error('El Usuario no se ha actualizado');
      });
    },
    changePage: function(page){
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getUsers(page);
    },
    newEstado: function(){
      $('#nuevo').modal('show');
    }

  }
});
