"use strict";

// Importar el módulo cliente y el módulo impuestos
var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));

// Función para manejar la importación predeterminada del módulo
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Crear una instancia de impuestos para un cliente
var impuestoCliente = new _impuestos["default"](100000, 20000);

// Crear un cliente
var cliente1 = new _cliente["default"]("Cliente1");

// Asignar el impuesto al cliente
cliente1.impuesto = impuestoCliente;

// Calcular e imprimir el impuesto del cliente
console.log(cliente1.calcularImpuesto());
