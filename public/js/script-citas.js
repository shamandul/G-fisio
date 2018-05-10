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

// obtener los Citas

new Vue({
  el: '#cita-crud',
  created: function created() {
    this.getServicios();
    this.getCitas();
    this.getHoras();
    this.getSalas();
    this.getEmpleados();
    this.getClientes();
  },
  data: {
    citas: [],
    servicios: [],
    registrados: [],
    empleados: [],
    users: [],
    salas: [],
    salaActual: [],
    horaActual: [],
    empleadoActual: [],
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
    newEstado: 'pendiente',
    newIdServicio: '',
    newIdSala: '',
    newIdHora: '',
    newIdEmpleado: '',
    newIdUser: '',
    newIdBuscarEmpleado: '',
    id_atiende: '',
    idCliente: '',
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
      var url = 'users/showUserSession';
      var urlCitas = '';
      axios.get(url).then(function (response) {
        _this.registrados = response.data;

        if (_this.registrados[0].role == 'empleado' || _this.registrados[0].role == 'admin') {
          urlCitas = 'citas?page=' + page;
          axios.get(urlCitas).then(function (response) {
            _this.citas = response.data.citas.data, _this.pagination = response.data.pagination;
          });
        } else {
          urlCitas = 'citas/showAllUser/' + _this.registrados[0].id + '?page=' + page;
          axios.get(urlCitas).then(function (response) {
            _this.citas = response.data.citas.data, _this.pagination = response.data.pagination;
          });
        }
      });
    },
    getServicios: function getServicios() {
      var _this2 = this;

      var url = 'servicios/showAll';
      axios.get(url).then(function (response) {
        _this2.servicios = response.data;
      });
    },
    getRegistrado: function getRegistrado() {
      var _this3 = this;

      var url = 'users/showUserSession';
      axios.get(url).then(function (response) {
        _this3.registrados = response.data;
      });
    },
    getSalas: function getSalas() {
      var _this4 = this;

      var url = 'salas/showAll';
      axios.get(url).then(function (response) {
        _this4.salas = response.data;
      });
    },
    getEmpleados: function getEmpleados() {
      var _this5 = this;

      var url = 'users/showEmpleados';
      axios.get(url).then(function (response) {
        _this5.empleados = response.data;
      });
    },
    getClientes: function getClientes() {
      var _this6 = this;

      var url = 'users/showClientes';
      axios.get(url).then(function (response) {
        _this6.users = response.data;
      });
    },
    getHoras: function getHoras() {
      var _this7 = this;

      var url = 'horas/showAll';
      axios.get(url).then(function (response) {
        _this7.horas = response.data;
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
      var _this8 = this;

      //elimina una cita

      var url = 'citas/' + cita.id;
      axios.delete(url).then(function (response) {
        _this8.getCitas();
        toastr.success('La cita fue eliminada correctamente');
      }).catch(function (error) {
        // this.errors= error.response.data;
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
      var _this9 = this;

      var url = 'atiende/buscar?id_citas=' + this.datosCita.id + '&id_users=' + this.datosCita.id_empleado;
      axios.get(url).then(function (response) {
        _this9.id_atiende = response.data;
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
      var _this10 = this;

      //this.buscarAtiende();
      this.updateAtiende(this.id_atiende);
      // actualizamos una cita
      var url = 'citas/' + id;
      axios.put(url, this.datosCita).then(function (response) {
        _this10.getCitas();
        _this10.datosCita = {
          'id': '',
          'fecha': '',
          'estado': '',
          'id_servicios': '',
          'id_users': '',
          'id_salas': '',
          'id_horas': ''
        };
        _this10.errors = [];
        $('#editar').modal('hide');
        toastr.success('La cita se ha actualizado correctamente');
      }).catch(function (error) {
        // this.errors= error.response.data;
        toastr.error('La cita no se ha actualizado');
      });
      $('#siguienteEditEstado').css('visibility', 'hidden');
      $('#siguienteEditServicio').css('visibility', 'hidden');
      $('#siguienteEditSala').css('visibility', 'hidden');
      $('#siguienteEditHorario').css('visibility', 'hidden');
      $('#siguienteEditEmpleado').css('visibility', 'hidden');
      $('#btn-actualizar').css('visibility', 'hidden');
    },
    createAtiende: function createAtiende() {
      var _this11 = this;

      // Método para crear una nueva atiende
      var url = 'atiende';
      axios.post(url, {
        id_citas: this.datosAtiende.id_citas,
        id_users: this.datosAtiende.id_users
      }).then(function (response) {
        _this11.datosAtiende.id_citas = '';
        _this11.datosAtiende.id_users = '';
        _this11.getCitas();
      }).catch(function (error) {
        //  this.errors= error.response.data;
        toastr.error('La cita no se ha guardado empleados');
      });
    },
    createCita: function createCita() {
      var _this12 = this;

      // Método para crear una nueva Cita
      var url = 'citas';
      if (this.registrados[0].role == 'cliente') {
        this.idCliente = this.registrados[0].id;
      } else {
        this.idCliente = this.newIdUser;
      }
      axios.post(url, {
        fecha: this.newFecha,
        estado: this.newEstado,
        id_servicios: this.newIdServicio,
        id_users: this.idCliente,
        id_salas: this.newIdSala,
        id_horas: this.newIdHora
      }).then(function (response) {
        _this12.datosAtiende.id_citas = response.data;
        _this12.datosAtiende.id_users = _this12.newIdEmpleado;
        _this12.createAtiende();
        _this12.newFecha = '';
        _this12.newEstado = 'pendiente';
        _this12.newIdServicio = '';
        _this12.newIdSala = '';
        _this12.newIdHora = '';
        _this12.errors = [];
        $('#nuevo').modal('hide');
        toastr.success('La cita fue guardada correctamente');
      }).catch(function (error) {
        // this.errors= error.response.data;
        toastr.error('La cita no se ha guardado');
      });
      $('#siguienteEstado').css('visibility', 'hidden');
      $('#siguienteServicio').css('visibility', 'hidden');
      $('#siguienteSala').css('visibility', 'hidden');
      $('#siguienteHorario').css('visibility', 'hidden');
      $('#siguienteCliente').css('visibility', 'hidden');
      $('#siguienteEmpleado').css('visibility', 'hidden');
      $('#btn-guardar').css('visibility', 'hidden');
    },
    changePage: function changePage(page) {
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getCitas(page);
    },
    newCita: function newCita() {
      $('#nuevo').modal('show');
    },
    newBuscarPorCliente: function newBuscarPorCliente() {
      this.getClientes();
      $('#buscarPorClientes').modal('show');
    },
    buscarClientes: function buscarClientes(page) {
      var _this13 = this;

      // Buscar las cita por clientes
      var $id = this.newIdUser;
      var urlCitas = 'citas/getCitasPorClientes/' + $id + '?page=' + page;
      axios.get(urlCitas).then(function (response) {
        _this13.citas = response.data.citas.data, _this13.pagination = response.data.pagination;
      });
      $('#buscarPorClientes').modal('hide');
    },
    newBuscarPorPendientes: function newBuscarPorPendientes(page) {
      var _this14 = this;

      // Buscar las cita por pendientes
      // var $id = this.newIdUser;
      var urlCitas = 'citas/getCitasPorPendientes?page=' + page;
      axios.get(urlCitas).then(function (response) {
        _this14.citas = response.data.citas.data, _this14.pagination = response.data.pagination;
      });
      $('#buscarPorClientes').modal('hide');
    },
    newBuscarPorEmpleados: function newBuscarPorEmpleados() {
      this.getClientes();
      $('#buscarPorEmpleados').modal('show');
    },
    buscarEmpleados: function buscarEmpleados(page) {
      var _this15 = this;

      // Buscar las cita por clientes
      var $id = this.newIdBuscarEmpleado;
      var urlCitas = 'citas/getCitasPorEmpleados/' + $id + '?page=' + page;
      axios.get(urlCitas).then(function (response) {
        _this15.citas = response.data.citas.data, _this15.pagination = response.data.pagination;
      });
      $('#buscarPorEmpleados').modal('hide');
    },
    siguienteFecha: function siguienteFecha() {

      this.getSalasLibres();

      if (this.newFecha != '') {
        $('#siguienteEstado').css('visibility', 'visible');
      }
    },
    siguienteEstado: function siguienteEstado() {
      if (this.newEstado != '') {
        $('#siguienteServicio').css('visibility', 'visible');
      }
    },
    siguienteServicio: function siguienteServicio() {
      if (this.newIdServicio != '') {
        $('#siguienteSala').css('visibility', 'visible');
      }
    },
    getSalasLibres: function getSalasLibres() {
      var _this16 = this;

      var fecha = this.newFecha;
      var url = 'salas/showAllLibre/' + fecha;
      axios.get(url).then(function (response) {
        _this16.salas = response.data;
      });
    },
    siguienteSala: function siguienteSala() {
      if (this.newIdSala != '') {
        $('#siguienteHorario').css('visibility', 'visible');
      }
    },
    getHorasLibres: function getHorasLibres() {
      var _this17 = this;

      var fecha = this.newFecha;
      var url = 'horas/showAllLibre/' + fecha;
      axios.get(url).then(function (response) {
        _this17.horas = response.data;
      });
    },
    siguienteHorario: function siguienteHorario() {
      if (this.registrados[0].role != 'cliente') {
        if (this.newIdHora != '') {
          $('#siguienteCliente').css('visibility', 'visible');
        }
      } else {
        if (this.newIdHora != '') {
          $('#siguienteEmpleado').css('visibility', 'visible');
        }
      }
      this.getEmpleadosLibres();
    },
    getEmpleadosLibres: function getEmpleadosLibres() {
      var _this18 = this;

      var fecha = this.newFecha;
      var hora = this.newIdHora;
      var url = 'users/showAllEmpleadosLibre/' + fecha + '/' + hora;
      axios.get(url).then(function (response) {
        _this18.empleados = response.data;
      });
    },
    siguienteEmpleado: function siguienteEmpleado() {
      if (this.newIdEmpleado != '') {
        $('#btn-guardar').css('visibility', 'visible');
      }
    },
    siguienteCliente: function siguienteCliente() {
      if (this.newIdUser != '') {
        $('#siguienteEmpleado').css('visibility', 'visible');
      }
    },
    siguienteEditFecha: function siguienteEditFecha() {

      this.getSalasEditLibres();
      this.getHorasEditLibres();

      if (this.datosCita.fecha != '') {
        $('#siguienteEditEstado').css('visibility', 'visible');
      }
    },
    siguienteEditEstado: function siguienteEditEstado() {
      if (this.datosCita.estado != '') {
        $('#siguienteEditServicio').css('visibility', 'visible');
      }
    },
    siguienteEditServicio: function siguienteEditServicio() {
      if (this.datosCita.id_servicios != '') {
        $('#siguienteEditSala').css('visibility', 'visible');
      }
    },
    getSalasEditLibres: function getSalasEditLibres() {
      var _this19 = this;

      var fecha = this.datosCita.fecha;
      var sala = this.datosCita.id_salas;
      var url = 'salas/showAllLibre/' + fecha;
      axios.get(url).then(function (response) {
        _this19.salas = response.data;
      });
      url = 'salas/showAllEditLibre/' + sala;
      axios.get(url).then(function (response) {
        _this19.salaActual = response.data;
      });
    },
    siguienteEditSala: function siguienteEditSala() {
      if (this.datosCita.id_salas != '') {
        $('#siguienteEditHorario').css('visibility', 'visible');
      }
    },
    getHorasEditLibres: function getHorasEditLibres() {
      var _this20 = this;

      var fecha = this.datosCita.fecha;
      var hora = this.datosCita.id_horas;
      var url = 'horas/showAllLibre/' + fecha;
      axios.get(url).then(function (response) {
        _this20.horas = response.data;
      });
      url = 'horas/showAllEditLibre/' + hora;
      axios.get(url).then(function (response) {
        _this20.horaActual = response.data;
      });
    },
    siguienteEditHorario: function siguienteEditHorario() {
      $('#siguienteEditEmpleado').css('visibility', 'visible');
      this.getEmpleadosEditLibres();
    },
    getEmpleadosEditLibres: function getEmpleadosEditLibres() {
      var _this21 = this;

      var fecha = this.datosCita.fecha;
      var hora = this.datosCita.id_horas;
      var empleado = this.datosCita.id_empleado;
      var url = 'users/showAllEmpleadosLibre/' + fecha + '/' + hora;
      axios.get(url).then(function (response) {
        _this21.empleados = response.data;
      });
      url = 'users/showEmpleadoActual/' + empleado;
      axios.get(url).then(function (response) {
        _this21.empleadoActual = response.data;
      });
    },
    siguienteEditEmpleado: function siguienteEditEmpleado() {
      if (this.datosCita.id_empleado != '') {
        $('#btn-actualizar').css('visibility', 'visible');
      }
    }
  }

});

/***/ })

/******/ });