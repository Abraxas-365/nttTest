import { FechasService } from "./fechas.service";

export function ordernarFechas(this: FechasService, orden: 'acentente' | 'decentente'): any {
    const fechas = this.fechasRepo.getFechas();
    const sortedFechas = fechas.slice().sort((a: any, b: any) => b.fecha - a.fecha)
    if (orden === 'decentente') {
        return sortedFechas;
    }
    return sortedFechas.reverse();

}
