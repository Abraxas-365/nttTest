import { Controller, Get, Inject, Res } from '@nestjs/common';
import { Response } from 'express';
import { IFechasService } from 'src/fechas/service/fechas.service';

@Controller('fechas')
export class FechasController {
    constructor(@Inject(IFechasService) protected fechasService: IFechasService) {
    }
    @Get('acendente')
    getFechasAcendente(@Res() res: Response) {
        res.status(200).json(this.fechasService.ordenarFechas('acentente'))

    }

    @Get('decendente')
    getFechasDecentente(@Res() res: Response) {
        res.status(200).json(this.fechasService.ordenarFechas('decendente'));
    }

    @Get('sumsaldos')
    getSumSaldos(@Res() res: Response) {
        res.status(200).json({ suma: this.fechasService.sumarSaldos() });

    }



}
