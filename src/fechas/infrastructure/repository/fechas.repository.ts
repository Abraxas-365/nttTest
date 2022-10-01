import { Injectable } from '@nestjs/common';
import { IFecha } from 'src/fechas/models/fechas';
import { getFechas } from './getFechas';

export interface IFechasRepo {
    getFechas(): Array<IFecha>
}

export const IFechasRepo = Symbol("IFechasRepo");

@Injectable({})
export class FechasRepo implements IFechasRepo {
    getFechas = getFechas.bind(this);

}
