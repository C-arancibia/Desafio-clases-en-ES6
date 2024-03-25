class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
        this.impuesto = null;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    calcularImpuesto() {
        if (this.impuesto) {
            return (this.impuesto.getMontoBrutoAnual() - this.impuesto.getDeducciones()) * 0.21;
        } else {
            return "No se ha definido el impuesto para este cliente.";
        }
    }
}

export default Cliente;