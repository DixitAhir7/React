import axios from "axios";

const createInstance = axios.create({
    baseURL:'https://dog.ceo/api/',
});

export default createInstance;