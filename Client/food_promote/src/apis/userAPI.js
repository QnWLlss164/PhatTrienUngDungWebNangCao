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
        await restRequest.put(`users/profile`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async ChangePassword(token, payload, cb) {
        await restRequest.put(`users/change-password`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async FavoriteProduct(token, id, cb) {
        await restRequest.post(`users/favoriteProduct`, { id }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async FavoriteRetaurant(token, id, cb) {
        await restRequest.post(`users/favoriteRetaurant`, { id }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async DeleteFavoriteProduct(token, id, cb) {
        await restRequest.post(`users/delete-favoriteProduct`, { id }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async DeleteFavoriteRetaurant(token, id, cb) {
        await restRequest.post(`users/delete-favoriteRestaurant`, { id }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
};
