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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// require('./bootstrap');
// obtener los Salas

new Vue({
  el: '#sala-crud',
  created: function created() {
    this.getSalas();
  },
  data: {
    salas: [],
    pagination: {
      'total': 0,
      'current_page': 0,
      'per_page': 0,
      'last_page': 0,
      'from': 0,
      'to': 0
    },
    nuevoSala: '',
    errors: [],
    datosSala: { 'id': '', 'nombre_sala': '' },
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
    getSalas: function getSalas(page) {
      var _this = this;

      // Obtenemos todos los salas
      var urlSalas = 'salas?page=' + page;
      axios.get(urlSalas).then(function (response) {
        _this.salas = response.data.salas.data, _this.pagination = response.data.pagination;
      });
    },
    deleteSala: function deleteSala(sala) {
      var _this2 = this;

      //elimina un sala
      var url = 'salas/' + sala.id;
      axios.delete(url).then(function (response) {
        _this2.getSalas();
        toastr.success('La sala fue eliminada correctamente');
      });
    },
    newSala: function newSala() {
      $('#nuevo').modal('show');
    },
    editSala: function editSala(sala) {
      // editamos un sala
      this.datosSala.id = sala.id;
      this.datosSala.nombre_sala = sala.nombre_sala;
      $('#editar').modal('show');
    },
    updateSala: function updateSala(id) {
      var _this3 = this;

      //actualizamos un sala
      var url = 'salas/' + id;
      axios.put(url, this.datosSala).then(function (response) {
        _this3.getSalas();
        _this3.datosSala = { 'id': '', 'nombre_sala': '' };
        _this3.errors = [];
        $('#editar').modal('hide');
        toastr.success('La sala se ha actualizado correctamente');
      }).catch(function (error) {
        _this3.errors = error.response.data;
      });
    },
    createSala: function createSala() {
      var _this4 = this;

      // Método para crear una nueva sala
      var url = 'salas';
      axios.post(url, {
        nombre_sala: this.nuevoSala
      }).then(function (response) {
        _this4.getSalas();
        _this4.nuevoSala = '';
        _this4.errors = [];
        $('#nuevo').modal('hide');
        toastr.success('La sala fue guardada correctamente');
      }).catch(function (error) {
        _this4.errors = error.response.data;
      });
    },
    changePage: function changePage(page) {
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getSalas(page);
    }

  }
});

/***/ })

/******/ });