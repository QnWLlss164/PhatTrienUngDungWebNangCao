import userBaseRestRequest from "./base/rest";

const restRequest = userBaseRestRequest();

export const GeoCodeAPI = {
    async getGeoCode({ lat, long, key }, cb) {
        const queryParams = new URLSearchParams();
        if (lat) queryParams.append("lat", lat);
        if (long) queryParams.append("long", long);
        if (key) queryParams.append("key", key);
        const queryString = queryParams ? `?${queryParams}` : "";
        await restRequest.get(`config/geocode${queryString}`, {}, (err, result) => {
            if (err) return cb(err);
            if (typeof cb === "function") cb(null, result);
        });

    }
}