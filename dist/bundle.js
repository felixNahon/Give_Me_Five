/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Liste_eleve = __webpack_require__(1);

	var _Liste_eleve2 = _interopRequireDefault(_Liste_eleve);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var eleves = [];
	function init(nom, prenom) {
		eleves = [new _Liste_eleve2.default("Gastineau", "Julien"), new _Liste_eleve2.default("Nahon", "Felix"), new _Liste_eleve2.default("Dussol", "Clement"), new _Liste_eleve2.default("Teboul", "Clement")];
		var $eleve = $('#listeEleve'),
		    $one = $eleve.children('li').detach();

		for (var j = 0; j < eleves.length; j++) {
			var $li = $one.clone(),
			    eleve = eleves[j];
			$li.find(".eleveNom").html(eleves.nom + " " + eleves.prenom);

			eleve.id = j;

			$li.attr('title', eleves.name);
			$('#listeEleve').append($li);
			console.log(eleves[j]);
		}
	}
	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Liste_eleve =

	/**
	 * [constructor description]
	 * @param  {[type]} nom    [nom de l eleve]
	 * @param  {[type]} prenom [prenom de l eleve]
	 * @return {[type]}        [description]
	 */
	function Liste_eleve(nom, prenom) {
		_classCallCheck(this, Liste_eleve);

		this.nom = nom;
		this.prenom = prenom;
	};

	exports.default = Liste_eleve;

/***/ }
/******/ ]);