import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const UserAPI = {
    async Login({ username, password }, cb) {
        await restRequest.post(`users/login`, { username, password }, (err, result) => {
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
    async getAll(token, { pageNumber, limit, keyword, status }, cb) {
        const queryParams = new URLSearchParams();
        if (pageNumber) queryParams.append("pageNumber", pageNumber);
        if (keyword) queryParams.append("keyword", keyword);
        if (limit) queryParams.append("limit", limit);
        if (status) queryParams.append("status", status);
        const queryString = queryParams ? `?${queryParams}` : "";
        await restRequest.get(`users${queryString}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async createUser(token, payload, cb) {
        await restRequest.post(`users/creata`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async updateUser(token, id, payload, cb) {
        await restRequest.put(`users/${id}`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },


    async deleteUser(token, id, cb) {
        await restRequest.delete(`users/${id}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
};
