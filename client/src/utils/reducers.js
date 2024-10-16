import {
    CLEAR_VALS,
    UPDATE_APPOINTMENT_DATE,
    UPDATE_APPOINTMENT_TIME,
    UPDATE_APPOINTMENT_TYPE,
    UPDATE_FORM_VALS
} from './actions';
import { useReducer } from 'react';


export const reducer = (state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            date: '',
            time: '',
            appointmentType: ''
        }, action) => {
    switch (action.type) {
        case UPDATE_APPOINTMENT_TIME:
            return {
                ...state,
                time: action.time,
            };
        case UPDATE_APPOINTMENT_TYPE:
            return {
                ...state,
                appointmentType: action.appointmentType,
                name: action.name,
                email: action.email,
                phone: action.phone,
                address: action.address,
                date: action.date,
                time: action.time
            };
        case UPDATE_APPOINTMENT_DATE:
            return {
                ...state,
                date: action.date
            }
        case UPDATE_FORM_VALS:
            return {
                ...state,
                name: action.name,
                email: action.email,
                phone: action.phone,
                address: action.address
            }
        case CLEAR_VALS:
            return {
                name: '',
                email: '',
                phone: '',
                address: '',
                appointmentType: '',
                time: '',
                date: ''
            }
        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}