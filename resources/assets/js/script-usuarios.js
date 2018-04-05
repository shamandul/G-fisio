require('./bootstrap');
// obtener los Citas

new Vue({
  el:'#cita-crud',
  created: function(){
    this.getCitas();
  },
  data: {
    citas: [],
    errors: [],
    datosC:{ 'id' : '',
                'fecha': '',
                'estado': ''}

  },
  methods: {
    getCitas: function(){
      // Obtenemos todas las citas
      var urlCitas = 'citas';
      axios.get(urlCitas).then(response=>{
        this.citas = response.data.citas.data
      });
    }
  }
});
