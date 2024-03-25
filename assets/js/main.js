import Cliente from './cliente.js';
import Impuestos from './impuestos.js';


const impuestoCliente = new Impuestos(100000, 20000);
const cliente1 = new Cliente("Cliente1");
cliente1.impuesto = impuestoCliente;

console.log(`Nombre del cliente: ${cliente1.getNombre()}`);
console.log(`${cliente1.calcularImpuesto()}`);