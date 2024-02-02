import axios from "axios";

const APPLICATION_JSON = "application/json";
const url = import.meta.env.VITE_API_URL;
export const CONTENT_TYPE = "Content-Type";

const httpClient = axios.create({
  baseURL: url,
  headers: {
    Accept: APPLICATION_JSON,
    CONTENT_TYPE: APPLICATION_JSON,
  },
});

export default httpClient;
