import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const ProductAPI = {
    async GetAllProduct(token, cb) {
        await restRequest.get(`product/all`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
};
