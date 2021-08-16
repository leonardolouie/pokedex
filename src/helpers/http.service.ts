import Axios from "axios";

const createHttpConfig = (accessToken = "", config) => {
    return {
        ...config,
        ...httpConfig(accessToken),
    };
};

export const httpConfig = (accessToken = "") => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
    };
    return config;
};

export const getUrl = (url) => {
    const baseUrlMain = process.env.NEXT_PUBLIC_API_URL;
    return `${baseUrlMain}${url}`;
};



function post(url, payload, accessToken, config) {
    return new Promise((res, rej) => {
        Axios.post(url, payload, createHttpConfig(accessToken, config))
            .then((data) => {
                res(data);
            })
            .catch((err) => {
                rej(err);
            });
    });
}

export const http = {
    post: (url, payload, accessToken?: any, config?: any) =>
        post(getUrl(url), payload, accessToken, config),
};
