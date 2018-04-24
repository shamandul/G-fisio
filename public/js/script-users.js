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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(56);


/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// obtener las horas

new Vue({
  el: '#usuarios-crud',
  created: function created() {
    this.getUsers();
  },
  data: {
    users: [],
    pagination: {
      'total': 0,
      'current_page': 0,
      'per_page': 0,
      'last_page': 0,
      'from': 0,
      'to': 0
    },
    errors: [],
    datosUser: {
      'id': '',
      'nombre': '',
      'apellidos': '',
      'telefono': '',
      'direccion': '',
      'role': '',
      'email': '',
      'activo': ''
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
    getUsers: function getUsers(page) {
      var _this = this;

      // Obtenemos todos los usuarios
      var url = 'users/showUserSession';
      var urlUser = '';
      axios.get(url).then(function (response) {
        _this.registrados = response.data;

        if (_this.registrados[0].role == 'admin') {
          urlUser = 'users?page=' + page;
          axios.get(urlUser).then(function (response) {
            _this.users = response.data.users.data, _this.pagination = response.data.pagination;
          });
        } else {

          _this.datosUser.id = _this.registrados[0].id;
          _this.datosUser.nombre = _this.registrados[0].nombre;
          _this.datosUser.apellidos = _this.registrados[0].apellidos;
          _this.datosUser.telefono = _this.registrados[0].telefono;
          _this.datosUser.direccion = _this.registrados[0].direccion;
          _this.datosUser.role = _this.registrados[0].role;
          _this.datosUser.email = _this.registrados[0].email;
          _this.datosUser.activo = _this.registrados[0].activo;
        }
      });
    },
    editUsuario: function editUsuario(user) {
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
    edit: function edit() {
      $('#editar').modal('show');
    },
    updateUser: function updateUser(id) {
      var _this2 = this;

      //actualizamos un usuario
      var url = 'users/' + id;
      axios.put(url, this.datosUser).then(function (response) {
        _this2.getUsers();
        _this2.datosUser = {
          'id': '',
          'nombre': '',
          'apellidos': '',
          'telefono': '',
          'direccion': '',
          'role': '',
          'email': '',
          'activo': ''
        };
        _this2.errors = [];
        $('#editar').modal('hide');
        toastr.success('El Usuario se ha actualizado correctamente');
      }).catch(function (error) {
        // this.errors= error.response.data;
        toastr.error('El Usuario no se ha actualizado');
      });
    },
    changePage: function changePage(page) {
      // Metodo para cambiar de página
      this.pagination.current_page = page;
      this.getUsers(page);
    },
    newEstado: function newEstado() {
      $('#nuevo').modal('show');
    }

  }
});

/***/ })

/******/ });