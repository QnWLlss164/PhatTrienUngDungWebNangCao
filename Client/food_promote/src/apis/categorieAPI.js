import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const CategoryAPI = {
    async GetAllCategories(pageNumber, cb) {
        await restRequest.get(`categories?pageNumber=${pageNumber}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
    async GetSlideCategories(cb) {
        await restRequest.get(`categories/getSlide`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
    async GetCategoryById(categoryId, pageNumber, cb) {
        await restRequest.get(`categories/${categoryId}?pageNumber=${pageNumber}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
}