// restaurants
import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const RestaurantAPI = {
    async getAll(token, cb) {
        await restRequest.get(`restaurants/all`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);

    },
    async deleteRestaurant(token, id, cb) {
        await restRequest.delete(`restaurants/${id}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async createRestaurant(token, payload, cb) {
        await restRequest.post(`restaurants`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async updateRestaurant(token, id, payload, cb) {
        await restRequest.put(`restaurants/${id}`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    }

}