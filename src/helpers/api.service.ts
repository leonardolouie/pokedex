import { http } from "./http.service";

export const ENDPOINTS = {
    LOGIN: () => "/login",
};

export const postLogin = (payload) => {
    return http.post(ENDPOINTS.LOGIN(), { ...payload });
};