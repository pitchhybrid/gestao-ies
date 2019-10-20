import { Professor } from './professor'

export interface Reserva {
    id?:number;
    dataReserva?: Date;
    tipoReserva?: string;
    reserva?: any;
    professor?: Professor;
    finalizada?: boolean;
    
}
