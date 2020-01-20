import {Entity} from "../../../utils/entity.model";

export interface Appointment extends Entity {
    start: Date,
    end: Date
    title: string,
    color: string,
}

