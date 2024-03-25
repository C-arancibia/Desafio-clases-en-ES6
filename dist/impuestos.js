"use strict";

Object.defineProperty(exports, "__esModule", {
value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Impuestos = /*#__PURE__*/function () {
function Impuestos(montoBrutoAnual, deducciones) {
    (0, _classCallCheck2["default"])(this, Impuestos);
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
}

(0, _createClass2["default"])(Impuestos, [{
    key: "getMontoBrutoAnual",
    value: function getMontoBrutoAnual() {
    return this.montoBrutoAnual;
    }
}, {
    key: "setMontoBrutoAnual",
    value: function setMontoBrutoAnual(montoBrutoAnual) {
    this.montoBrutoAnual = montoBrutoAnual;
    }
}, {
    key: "getDeducciones",
    value: function getDeducciones() {
    return this.deducciones;
    }
}, {
    key: "setDeducciones",
    value: function setDeducciones(deducciones) {
    this.deducciones = deducciones;
    }
}]);
return Impuestos;
}();

var _default = Impuestos;
exports["default"] = _default;
