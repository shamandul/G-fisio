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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// require('./bootstrap');
// obtener los Servicios

new Vue({
  el: '#servicio-crud',
  created: function created() {
    this.getServicios();
  },
  data: {
    servicios: [],
    pagination: {
      'total': 0,
      'current_page': 0,
      'per_page': 0,
      'last_page': 0,
      'from': 0,
      'to': 0
    },
    nuevoServicio: '',
    nuevaDescripcion: '',
    nuevoPrecio: '',
    errors: [],
    datosServicio: { 'id': '', 'nombre_servicio': '', 'descripcion': '', 'precio': '' },
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
    getServicios: function getServicios(page) {
      var _this = this;

      // Obtenemos todos los servicios
      var urlServicios = 'servicios?page=' + page;
      axios.get(urlServicios).then(function (response) {
        _this.servicios = response.data.servicios.data, _this.pagination = response.data.pagination;
      });
    },
    deleteServicio: function deleteServicio(servicio) {
      var _this2 = this;

      //elimina un servicio
      var url = 'servicios/' + servicio.id;
      axios.delete(url).then(function (response) {
        _this2.getServicios();
        toastr.success('El servicio fue eliminado correctamente');
      });
    },
    editServicio: function editServicio(servicio) {
      // editamos un servicio
      this.datosServicio.id = servicio.id;
      this.datosServicio.nombre_servicio = servicio.nombre_servicio;
      this.datosServicio.descripcion = servicio.descripcion;
      this.datosServicio.precio = servicio.precio;
      $('#editar').modal('show');
    },
    updateServicio: function updateServicio(id) {
      var _this3 = this;

      //actualizamos un servicio
      var url = 'servicios/' + id;
      axios.put(url, this.datosServicio).then(function (response) {
        _this3.getServicios();
        _this3.datosServicio = { 'id': '', 'nombre_servicio': '', 'descripcion': '', 'precio': '' };
        _this3.errors = [];
        $('#editar').modal('hide');
        toastr.success('El servicio se ha actualizado correctamente');
      }).catch(function (error) {
        _this3.errors = error.response.data;
      });
    },
    createServicio: function createServicio() {
      var _this4 = this;

      // Método para crear un nuevo servicio
      var url = 'servicios';
      axios.post(url, {
        nombre_servicio: this.nuevoServicio,
        descripcion: this.nuevaDescripcion,
        precio: this.nuevoPrecio
      }).then(function (response) {
        _this4.getServicios();
        _this4.nuevoServicio = '';
        _this4.nuevaDescripcion = '';
        _this4.nuevoPrecio = '';
        _this4.errors = [];
        $('#nuevo').modal('hide');
        toastr.success('El servicio fue guardado correctamente');
      }).catch(function (error) {
        _this4.errors = error.response.data;
      });
    },
    changePage: function changePage(page) {
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getServicios(page);
    },
    newEstado: function newEstado() {
      $('#nuevo').modal('show');
    }

  }
});

/***/ })

/******/ });