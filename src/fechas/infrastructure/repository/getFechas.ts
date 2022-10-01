import { IFecha } from "src/fechas/models/fechas";
import { FechasRepo } from "./fechas.repository";

export function getFechas(this: FechasRepo): Array<IFecha> {
    const fechas: Array<IFecha> = [

        { fecha: new Date("2018-02-13"), saldoAntiguo: 1225 },

        { fecha: new Date("2020-04-16"), saldoNuevo: undefined },

        { fecha: new Date("2013-05-10"), saldoAntiguo: null },

        { fecha: new Date("2012-01-20"), saldoNuevo: 1205 },

    ];
    return fechas;
}
