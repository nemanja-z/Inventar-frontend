import api from "./api";

export default function cookie(){

    return api().get("sanctum/csrf-cookie");
}