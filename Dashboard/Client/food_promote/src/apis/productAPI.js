import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const ProductAPI = {
    async GetAllProduct({ pageNumber, keyword }, cb) {
        const queryParams = new URLSearchParams();
        if (pageNumber) queryParams.append("pageNumber", pageNumber);
        if (keyword) queryParams.append("keyword", keyword);

        const queryString = queryParams ? `?${queryParams}` : "";
        await restRequest.get(`product${queryString}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });
    },
    async GetMenuByRestaurant(menuId, pageNumber, cb) {
        await restRequest.get(`product/menu-id/${menuId}?pageNumber=${pageNumber}`, {}, (err, result) => {
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
    async ProductReview(token, id, payload, cb) {
        await restRequest.post(`product/${id}/review`, { payload }, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        }, token);
    },
    async ProductTop(cb) {
        await restRequest.get(`product/top`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        })
    },
    async searchProduct(q, page, cb) {
        const queryParams = new URLSearchParams();
        if (q) queryParams.append("q", q);
        if (page) queryParams.append("page", page);

        const queryString = queryParams ? `?${queryParams}` : "";
        await restRequest.get(`product/search${queryString}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        })
    }
};
