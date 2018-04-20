/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// require('./bootstrap');
// obtener los Citas

new Vue({
  el: '#cita-crud',
  created: function created() {
    this.getServicios();
    this.getCitas();
    this.getHoras();
    this.getSalas();
    this.getEmpleados();
  },
  data: {
    citas: [],
    servicios: [],
    empleados: [],
    salas: [],
    horas: [],
    atiende: [],
    pagination: {
      'total': 0,
      'current_page': 0,
      'per_page': 0,
      'last_page': 0,
      'from': 0,
      'to': 0
    },
    newFecha: '',
    newEstado: '',
    newIdServicio: '',
    newIdSala: '',
    newIdHora: '',
    newIdEmpleado: '',
    id_atiende: '',
    errors: [],
    datosCita: {
      'id': '',
      'fecha': '',
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
  computed: {
    isActived: function isActived() {
      return this.pagination.current_page;
    },
    pagesNumber: function pagesNumber() {
      if (!this.pagination.to) {
        return [];
      }
      var from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      var to = from + this.offset * 2;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      var pagesArray = [];
      while (from <= to) {
        pagesArray.push(from);
        from++;
      }
      return pagesArray;
    }
  },
  methods: {
    getCitas: function getCitas(page) {
      var _this = this;

      // Obtenemos todas las citas
      var urlCitas = 'citas?page=' + page;
      axios.get(urlCitas).then(function (response) {
        _this.citas = response.data.citas.data, _this.pagination = response.data.pagination;
      });
    },
    getServicios: function getServicios() {
      var _this2 = this;

      var url = 'servicios/showAll';
      axios.get(url).then(function (response) {
        _this2.servicios = response.data;
      });
    },
    getSalas: function getSalas() {
      var _this3 = this;

      var url = 'salas/showAll';
      axios.get(url).then(function (response) {
        _this3.salas = response.data;
      });
    },
    getEmpleados: function getEmpleados() {
      var _this4 = this;

      var url = 'users/showEmpleados';
      axios.get(url).then(function (response) {
        _this4.empleados = response.data;
      });
    },
    getHoras: function getHoras() {
      var _this5 = this;

      var url = 'horas/showAll';
      axios.get(url).then(function (response) {
        _this5.horas = response.data;
      });
    },
    deleteAtiende: function deleteAtiende(id) {
      var url = 'atiende/' + id;
      axios.delete(url).then(function (response) {
        // toastr.success('La cita fue eliminada correctamente Atiende');
      }).catch(function (error) {
        // this.errors= error.response.data;
        // toastr.error('La cita no se eliminó en Atiende');
      });
    },
    deleteCita: function deleteCita(cita) {
      var _this6 = this;

      //elimina una cita

      var url = 'citas/' + cita.id;
      axios.delete(url).then(function (response) {
        _this6.getCitas();
        toastr.success('La cita fue eliminada correctamente');
      }).catch(function (error) {
        _this6.errors = error.response.data;
        toastr.error('La cita no se eliminó');
      });
    },
    editCita: function editCita(cita) {
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
    buscarAtiende: function buscarAtiende() {
      var _this7 = this;

      var url = 'atiende/buscar?id_citas=' + this.datosCita.id + '&id_users=' + this.datosCita.id_empleado;
      axios.get(url).then(function (response) {
        _this7.id_atiende = response.data;
      });
    },
    getEliminarCita: function getEliminarCita(cita) {
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
    aceptarCita: function aceptarCita() {
      this.deleteAtiende(this.id_atiende);
      this.deleteCita(this.datosCita);
      $('#delete').modal('hide');
    },
    cancelarCita: function cancelarCita() {
      $('#delete').modal('hide');
    },
    updateAtiende: function updateAtiende(id) {
      var url = 'atiende/' + id;
      axios.put(url, {
        id_citas: this.datosCita.id,
        id_users: this.datosCita.id_empleado
      }).catch(function (error) {
        // this.errors = error.response.data;
        toastr.error('La cita no se ha actualizado atiende');
      });
    },
    updateCita: function updateCita(id) {
      var _this8 = this;

      //this.buscarAtiende();
      this.updateAtiende(this.id_atiende);
      // actualizamos una cita
      var url = 'citas/' + id;
      axios.put(url, this.datosCita).then(function (response) {
        _this8.getCitas();
        _this8.datosCita = {
          'id': '',
          'fecha': '',
          'estado': '',
          'id_servicios': '',
          'id_users': '',
          'id_salas': '',
          'id_horas': ''
        };
        _this8.errors = [];
        $('#editar').modal('hide');
        toastr.success('La cita se ha actualizado correctamente');
      }).catch(function (error) {
        // this.errors= error.response.data;
        toastr.error('La cita no se ha actualizado');
      });
    },
    createAtiende: function createAtiende() {
      var _this9 = this;

      // Método para crear una nueva atiende
      var url = 'atiende';
      axios.post(url, {
        id_citas: this.datosAtiende.id_citas,
        id_users: this.datosAtiende.id_users
      }).then(function (response) {
        _this9.datosAtiende.id_citas = '';
        _this9.datosAtiende.id_users = '';
        _this9.getCitas();
      }).catch(function (error) {
        //  this.errors= error.response.data;
        toastr.error('La cita no se ha guardado empleados');
      });
    },
    createCita: function createCita() {
      var _this10 = this;

      // Método para crear una nueva Cita
      var url = 'citas';
      axios.post(url, {
        fecha: this.newFecha,
        estado: this.newEstado,
        id_servicios: this.newIdServicio,
        id_users: 1,
        id_salas: this.newIdSala,
        id_horas: this.newIdHora
      }).then(function (response) {
        _this10.datosAtiende.id_citas = response.data;
        _this10.datosAtiende.id_users = _this10.newIdEmpleado;
        _this10.createAtiende();
        _this10.newFecha = '';
        _this10.newEstado = '';
        _this10.newIdServicio = '';
        _this10.newIdSala = '';
        _this10.newIdHora = '';
        _this10.errors = [];
        $('#nuevo').modal('hide');
        toastr.success('La cita fue guardada correctamente');
      }).catch(function (error) {
        // this.errors= error.response.data;
        toastr.error('La cita no se ha guardado');
      });
    },
    changePage: function changePage(page) {
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getCitas(page);
    },
    newCita: function newCita() {
      $('#nuevo').modal('show');
    }

  }
});

/***/ })

/******/ });