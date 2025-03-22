import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const ProductAPI = {
    async GetAllProduct(cb) {
        await restRequest.get(`product`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
    async GetSingleProduct(productId, cb) {
        await restRequest.get(`product/${productId}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
    async GetProductByCategoryID(categoryId, cb) {
        await restRequest.get(`product/category-id/${categoryId}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
    async Recomment(categoryId, cb) {
        await restRequest.get(`product/recomment/${categoryId}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
    async ProductReview(payload, cb) {
        await restRequest.post(`product/:id/review`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },

};
