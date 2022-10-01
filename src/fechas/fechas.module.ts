import { Module } from "@nestjs/common";
import { FechasRepo, IFechasRepo } from "./infrastructure/repository/fechas.repository";
import { FechasController } from "./infrastructure/rest/fechas.controller";
import { FechasService, IFechasService } from "./service/fechas.service";

@Module({
    controllers: [FechasController],
    providers: [
        {
            provide: IFechasRepo,
            useClass: FechasRepo
        },
        {
            provide: IFechasService,
            useClass: FechasService
        },
    ],
})
export class FechasModule { }
