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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(54);


/***/ }),

/***/ 54:
/***/ (function(module, exports) {

// require('./bootstrap');
// obtener las Facturas

new Vue({
  el: '#factura-crud',
  created: function created() {
    this.getFacturas();
    this.getCitas();
  },
  data: {
    facturas: [],
    pagination: {
      'total': 0,
      'current_page': 0,
      'per_page': 0,
      'last_page': 0,
      'from': 0,
      'to': 0
    },
    newFechaEmision: '',
    newEstado: 'pendiente',
    newFechaPago: '',
    citas: '',
    newIdCita: '',
    errors: [],
    datosCita: {
      'id': '',
      'fecha': '',
      'estado': '',
      'id_servicios': '',
      'id_users': '',
      'id_salas': '',
      'id_horas': '',
      'nombre_sala': '',
      'nombre': ''
    },
    datosFactura: {
      'id': '',
      'fecha_emision': '',
      'estado': '',
      'fecha_pago': '',
      'id_citas': ''
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
    getFacturas: function getFacturas(page) {
      var _this = this;

      // Obtenemos todas las Facturas
      var url = 'facturas?page=' + page;
      axios.get(url).then(function (response) {
        _this.facturas = response.data.facturas.data, _this.pagination = response.data.pagination;
      });
    },
    getCitas: function getCitas() {
      var _this2 = this;

      // Obtenemos todas las citas
      var urlCitas = 'citas/citasInNotFacturas';
      axios.get(urlCitas).then(function (response) {
        _this2.citas = response.data.citas;
      });
    },
    deleteFactura: function deleteFactura(factura) {
      var _this3 = this;

      //elimina una Factura
      var url = 'facturas/' + factura.id;
      axios.delete(url).then(function (response) {
        _this3.getFacturas();
        toastr.success('La factura fue eliminada correctamente');
      });
    },
    editFactura: function editFactura(factura) {
      // editamos una factura
      this.datosFactura.id = factura.id;
      this.datosFactura.fecha_emision = factura.fecha_emision;
      this.datosFactura.estado = factura.estado;
      this.datosFactura.fecha_pago = factura.fecha_pago;
      this.datosFactura.id_citas = factura.id_citas;
      $('#editar').modal('show');
    },
    updateFactura: function updateFactura(id) {
      var _this4 = this;

      //actualizamos una Factura
      var url = 'facturas/' + id;
      axios.put(url, this.datosFactura).then(function (response) {
        _this4.getFacturas();
        _this4.datosFactura = {
          'id': '',
          'fecha_emision': '',
          'estado': 'pendiente',
          'fecha_pago': '',
          'id_citas': ''
        };
        _this4.errors = [];
        $('#editar').modal('hide');
        toastr.success('la factura se ha actualizado correctamente');
      }).catch(function (error) {
        // this.errors= error.response.data;
        toastr.error('La factura no se ha actualizado');
      });
    },
    createFactura: function createFactura() {
      var _this5 = this;

      // Método para crear una nueva factura
      var url = 'facturas';
      axios.post(url, {
        fecha_emision: this.newFechaEmision,
        estado: this.newEstado,
        fecha_pago: this.newFechaPago,
        id_citas: this.newIdCita
      }).then(function (response) {
        _this5.getFacturas();
        _this5.newFechaEmision = '';
        _this5.newEstado = '';
        _this5.newFechaPago = '';
        _this5.newIdCita = '';
        _this5.errors = [];
        $('#nuevo').modal('hide');
        toastr.success('la factura fue guardada correctamente');
      }).catch(function (error) {
        // this.errors= error.response.data;
        toastr.success('la factura no fue guardada');
      });
    },
    changePage: function changePage(page) {
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getServicios(page);
    },
    newEstadoVista: function newEstadoVista() {
      var hoy = new Date();
      var dia = hoy.getDate();
      if (dia < 10) {
        dia = '0' + dia;
      }
      var mes = hoy.getMonth() + 1;
      if (mes < 10) {
        mes = '0' + mes;
      }
      this.newFechaPago = hoy.getFullYear() + '-' + mes + '-' + dia;
      this.getCitas();
      $('#nuevo').modal('show');
    }

  }
});

/***/ })

/******/ });