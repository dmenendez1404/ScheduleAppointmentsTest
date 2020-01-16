import { Entity } from '../shared/entity.model';

export interface Appointment extends Entity {
    start_time: Date,
    end_time: Date
    title: string,
    _id: string,
}

