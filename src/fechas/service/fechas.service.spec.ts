import { TestingModule, Test } from "@nestjs/testing"
import { FechasRepo, IFechasRepo } from "../infrastructure/repository/fechas.repository";
import { FechasService, IFechasService } from "./fechas.service";

describe('FechasService', () => {
    let service: FechasService;
    let repository: FechasRepo


    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
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
            .compile();
        service = module.get<FechasService>(IFechasService);
        repository = module.get<FechasRepo>(IFechasRepo);
    });
    it('debe definir el servicio', () => {
        expect(service).toBeDefined()
    })

    it('debe definir el repo', () => {
        expect(repository).toBeDefined()
    })

    it('debe retornar la suma que es 2430', () => {
        expect(service.sumarSaldos()).toBe(2430)
    })

    it('debe retornar las fechas en decendente', () => {
        expect(service.ordenarFechas('decendente')).toStrictEqual([
            {
                "fecha": new Date("2020-04-16"),
                "saldoNuevo": undefined
            },
            {
                "fecha": new Date("2018-02-13"),
                "saldoAntiguo": 1225
            },
            {
                "fecha": new Date("2013-05-10"),
                "saldoAntiguo": null
            },
            {
                "fecha": new Date("2012-01-20"),
                "saldoNuevo": 1205
            }
        ])
    })
    it('debe retornar las fechas en acentente', () => {
        expect(service.ordenarFechas('acentente')).toStrictEqual([
            {
                "fecha": new Date("2012-01-20"),
                "saldoNuevo": 1205
            },
            {
                "fecha": new Date("2013-05-10"),
                "saldoAntiguo": null
            },
            {
                "fecha": new Date("2018-02-13"),
                "saldoAntiguo": 1225
            },
            {
                "fecha": new Date("2020-04-16"),
                "saldoNuevo": undefined
            }
        ])
    })

})
