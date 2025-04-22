// restaurants
import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const RestaurantAPI = {
    async getAll({ pageNumber, keyword }, cb) {
        const queryParams = new URLSearchParams();
        if (pageNumber) queryParams.append("pageNumber", pageNumber);
        if (keyword) queryParams.append("keyword", keyword);

        const queryString = queryParams ? `?${queryParams}` : "";
        await restRequest.get(`restaurants${queryString}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });

    },
    async getSingle(id, cb) {
        await restRequest.get(`restaurants/${id}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });

    },

    async postReview(token, id, payload, cb) {
        await restRequest.post(`restaurants/${id}/review`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async getTopRatedRest(cb) {
        await restRequest.get(`restaurants/top`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        })
    },
    async searchRestaurant(q, page, cb) {
        const queryParams = new URLSearchParams();
        if (q) queryParams.append("q", q);
        if (page) queryParams.append("page", page);

        const queryString = queryParams ? `?${queryParams}` : "";
        await restRequest.get(`restaurants/search${queryString}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        })
    }
}