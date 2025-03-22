import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const UserAPI = {
    async Login({ username, password }, cb) {
        await restRequest.post(`users/login`, { username, password }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
    async Register(payload, cb) {
        await restRequest.post(`users`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
    async Profile(token, cb) {
        await restRequest.get(`users/profile`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async UpdateProfile(token, payload, cb) {
        await restRequest.post(`users/profile`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async FavoriteProduct(token, payload, cb) {
        await restRequest.post(`users/favoriteProduct`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async FavoriteRetaurant(token, payload, cb) {
        await restRequest.post(`users/favoriteRetaurant`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async DeleteFavoriteProduct(token, payload, cb) {
        await restRequest.post(`users/delete-favoriteProduct`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async DeleteFavoriteRetaurant(token, payload, cb) {
        await restRequest.post(`users/delete-favoriteRestaurant`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
};
