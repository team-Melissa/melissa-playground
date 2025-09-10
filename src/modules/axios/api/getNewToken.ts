import { type RefreshDto } from "@/modules/axios/types";
import axios from "axios";

export const getNewToken = async (refreshToken: string) => {
  const { data } = await axios.post<RefreshDto>("http://localhost:4000/api/auth/refresh", { refreshToken });
  return data;
};
