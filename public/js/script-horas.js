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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// obtener las horas

new Vue({
  el: '#hora-crud',
  created: function created() {
    this.getHoras();
  },
  data: {
    horas: [],
    pagination: {
      'total': 0,
      'current_page': 0,
      'per_page': 0,
      'last_page': 0,
      'from': 0,
      'to': 0
    },
    newHoraInicio: '',
    newHoraFin: '',
    newDenominacion: '',
    errors: [],
    datosHora: {
      'id': '',
      'hora_inicio': '',
      'hora_fin': '',
      'denominacion': ''
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
    getHoras: function getHoras(page) {
      var _this = this;

      // Obtenemos todas las horas
      var url = 'horas?page=' + page;
      axios.get(url).then(function (response) {
        _this.horas = response.data.horas.data, _this.pagination = response.data.pagination;
      });
    },
    deleteHora: function deleteHora(hora) {
      var _this2 = this;

      //elimina una hora
      var url = 'horas/' + hora.id;
      axios.delete(url).then(function (response) {
        _this2.getHoras();
        toastr.success('La hora fue eliminada correctamente');
      });
    },
    editHora: function editHora(hora) {
      // editamos una hora
      this.datosHora.id = hora.id;
      this.datosHora.hora_inicio = hora.hora_inicio;
      this.datosHora.hora_fin = hora.hora_fin;
      this.datosHora.denominacion = hora.denominacion;
      $('#editar').modal('show');
    },
    updateHora: function updateHora(id) {
      var _this3 = this;

      //actualizamos una hora
      var url = 'horas/' + id;
      axios.put(url, this.datosHora).then(function (response) {
        _this3.getHoras();
        _this3.datosHora = {
          'id': '',
          'hora_inicio': '',
          'hora_fin': '',
          'denominacion': ''
        };
        _this3.errors = [];
        $('#editar').modal('hide');
        toastr.success('La Hora se ha actualizado correctamente');
      }).catch(function (error) {
        // this.errors= error.response.data;
        toastr.error('La Hora no se ha actualizado correctamente');
      });
    },
    createHora: function createHora() {
      var _this4 = this;

      // Método para crear una nueva hora
      var url = 'horas';
      axios.post(url, {
        hora_inicio: this.newHoraInicio,
        hora_fin: this.newHoraFin,
        denominacion: this.newDenominacion
      }).then(function (response) {
        _this4.getHoras();
        _this4.newHoraInicio = '';
        _this4.newHoraFin = '';
        _this4.newDenominacion = '';
        _this4.errors = [];
        $('#nuevo').modal('hide');
        toastr.success('La hora fue guardado correctamente');
      }).catch(function (error) {
        // this.errors= error.response.data;
        toastr.error('La Hora no fue guardada');
      });
    },
    changePage: function changePage(page) {
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getHoras(page);
    },
    newEstado: function newEstado() {
      $('#nuevo').modal('show');
    }

  }
});

/***/ })

/******/ });