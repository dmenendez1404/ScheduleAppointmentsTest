import { Entity } from '../shared/entity.model'

export interface Appointment extends Entity {
    start: Date,
    end: Date
    title: string,
    color: string,
    description: string,
    clothing: string,
}

