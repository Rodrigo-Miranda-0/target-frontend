import httpClient from "./httpClient";

export const registerUser = async (userData: {
  user: {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
    gender: string;
  };
}) => {
  const response = await httpClient.post("/api/v1/users", userData);
  return response.data;
};

export const loginUser = async (userData: {
  user: {
    email: string;
    password: string;
  };
}) => {
  const response = await httpClient.post("/api/v1/users/sign_in", userData);
  if (response.data) {
    localStorage.setItem("token", response.data.token);
  }
};

export const logoutUser = async () => {
  localStorage.removeItem("token");
};
