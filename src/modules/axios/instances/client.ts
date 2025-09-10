import { SERVER_URL } from "@/modules/axios/constants";
import { clientRequestInterceptor } from "@/modules/axios/interceptors/request/client";
import { clientResponseErrorInterceptor } from "@/modules/axios/interceptors/response/client";
import axios from "axios";

export const APIClient = axios.create({
  baseURL: SERVER_URL,
  timeout: 5 * 1000,
});

APIClient.interceptors.request.use(clientRequestInterceptor, undefined);
APIClient.interceptors.response.use(undefined, clientResponseErrorInterceptor);
