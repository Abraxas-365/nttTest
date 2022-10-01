import { Controller, Get, Inject } from '@nestjs/common';
import { IFechasService } from 'src/fechas/service/fechas.service';

@Controller('fechas')
export class FechasController {
    constructor(@Inject(IFechasService) protected fechasService: IFechasService) {
    }
    @Get('acendente')
    getFechasAcendente() {
        return this.fechasService.ordenarFechas('acentente');
    }

    @Get('decentente')
    getFechasDecentente() {
        return this.fechasService.ordenarFechas('decentente');
    }

    @Get('sumsaldos')
    getSumSaldos() {
        return { suma: this.fechasService.sumarSaldos() };

    }



}
