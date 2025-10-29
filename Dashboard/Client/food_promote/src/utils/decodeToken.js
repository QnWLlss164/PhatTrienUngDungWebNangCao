import { jwtDecode } from "jwt-decode";

export default function InfoUser(token) {
    return jwtDecode(token);
}