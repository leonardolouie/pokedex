import React from "react";
import { ToastContainer, toast as Toasts } from "react-toastify";

export const ToastContainerComponent = () => {
    return (
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
};
const defaultConfig = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const toast = {
    error: (message, config) =>
        Toasts.error(message, {
            ...defaultConfig,
            ...config,
        }),
    info: (message, config) =>
        Toasts.info(message, {
            ...defaultConfig,
            ...config,
        }),
    success: (message, config) =>
        Toasts.success(message, {
            ...defaultConfig,
            ...config,
        }),
    warn: (message, config) =>
        Toasts.warn(message, {
            ...defaultConfig,
            ...config,
        }),
    dark: (message, config) =>
        Toasts.dark(message, {
            ...defaultConfig,
            ...config,
        }),
    default: (message, config) =>
        Toasts(message, {
            ...defaultConfig,
            ...config,
        }),
};
