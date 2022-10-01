import { Inject, Injectable } from '@nestjs/common';
import { IFechasRepo } from '../infrastructure/repository/fechas.repository';
import { IFecha } from '../models/fechas';
import { ordernarFechas } from './ordenarFechas';
import { sumarSaldos } from './sumarSaldos';

export interface IFechasService {
    ordenarFechas(orden: 'acentente' | 'decentente'): Array<IFecha>;
    sumarSaldos(): number;
}


export const IFechasService = Symbol("IFechasService");

@Injectable({})
export class FechasService implements IFechasService {
    constructor(@Inject(IFechasRepo) protected fechasRepo: IFechasRepo) { }

    ordenarFechas = ordernarFechas.bind(this);
    sumarSaldos = sumarSaldos.bind(this);

}
