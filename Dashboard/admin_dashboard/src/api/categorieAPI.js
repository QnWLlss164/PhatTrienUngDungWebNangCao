import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const CategoryAPI = {

    async getAllCategory(token, cb) {
        await restRequest.get(`categories//all`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async deleteCategory(token, id, cb) {
        await restRequest.delete(`categories/${id}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async createCategory(token, payload, cb) {
        await restRequest.post(`categories`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async updateCategory(token, id, payload, cb) {
        await restRequest.put(`categories/${id}`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
}