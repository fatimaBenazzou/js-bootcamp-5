import { apiConfig } from "../apiConfig";

export async function getWeather({ city }) {
  const response = await apiConfig.get(
    `weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
  );

  return response;
}
