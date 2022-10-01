import { FechasService } from "./fechas.service";

export function sumarSaldos(this: FechasService): number {
    const fechas = this.fechasRepo.getFechas();

    let sum = 0;
    for (let i = 0; i < fechas.length; i++) {
        if (typeof fechas[i].saldoAntiguo === "number") {
            sum = sum + fechas[i].saldoAntiguo;
        }

        if (typeof fechas[i].saldoNuevo === "number") {
            sum = sum + fechas[i].saldoNuevo;
        }
    }
    return sum;

}
