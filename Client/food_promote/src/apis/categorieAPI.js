import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const CategoryAPI = {
    async GetAllCategories(cb) {
        await restRequest.get(`categories`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
    async GetCategoryById(categoryId, cb) {
        await restRequest.get(`categories/${categoryId}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
}