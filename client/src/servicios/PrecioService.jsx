import { CalculadoraTamaño } from "./CalculadoraTamaño";

class PrecioService {
    calcularPrecio(estrategiaTamaño, relleno, fecha) {
        const calculadora = new CalculadoraTamaño();
        const precioBase = 20;
        const precioTamaño = calculadora.calcular(estrategiaTamaño);

        let precioRelleno = 0;
        if (relleno) precioRelleno = 20;

        let precioEntrega = 0;
        if (fecha) {
            const hoy = new Date();
            const entrega = new Date(fecha);
            const diferencia = Math.ceil((entrega - hoy) / (1000 * 60 * 60 * 24));

            if (diferencia < 5) {
                precioEntrega = 25;
            } else if (diferencia < 10) {
                precioEntrega = 10;
            }
        }

        const total = precioBase + precioTamaño + precioRelleno + precioEntrega;
        return {precioBase, precioTamaño, precioRelleno, precioEntrega, total};
    }
}

export default new PrecioService();