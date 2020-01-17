import {Entity} from "../../../utils/entity.model";

export interface Appointment extends Entity {
    startTime: Date,
    endTime: Date
    title: string,
}

