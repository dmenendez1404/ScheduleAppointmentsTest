
import {instance, mock} from 'ts-mockito';
import {AppointmentsDao} from "../appointments.dao";
import {AppointmentsController} from "../appointments.controller";

export const createRequestControllerMock = () => {
    const mockDao = mock(AppointmentsDao);
    const controller = new AppointmentsController(instance(mockDao));

    return {
        controller: controller,
        requestsDao: mockDao,
    }
};
