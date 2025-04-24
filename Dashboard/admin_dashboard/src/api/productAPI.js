import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const ProductAPI = {
    async GetAllProduct(token, { pageNumber, keyword }, cb) {
        const queryParams = new URLSearchParams();
        if (pageNumber) queryParams.append("pageNumber", pageNumber);
        if (keyword) queryParams.append("keyword", keyword);
        const queryString = queryParams ? `?${queryParams}` : "";
        await restRequest.get(`product/all${queryString}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async deleteFood(token, id, cb) {
        await restRequest.delete(`product/${id}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async createFood(token, payload, cb) {
        const formData = new FormData();
        for (const key in payload) {
            if (payload[key]) {
                if (payload[key] instanceof File) {
                    formData.append(key, payload[key]); // là ảnh
                } else {
                    formData.append(key, payload[key]); // là text
                }
            }
        }
        await restRequest.post(`product`, formData, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token, true);
    },
    async updateFood(token, id, payload, cb) {
        const formData = new FormData();
        for (const key in payload) {
            if (payload[key]) {
                if (payload[key] instanceof File) {
                    formData.append(key, payload[key]);
                } else {
                    formData.append(key, payload[key]);
                }
            }
        }
        await restRequest.put(`product/${id}`, formData, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token, true);

    },
    async getChart(token, cb) {
        await restRequest.get(`product/chart`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
};
