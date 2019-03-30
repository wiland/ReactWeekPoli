import { API_ENDPOINT, API_KEY, API_COUNTRY } from "../config";

export function getHeadlinesNews(category) {
  return fetch(`${API_ENDPOINT}top-headlines?country=${API_COUNTRY}&${category ? `category=${category}&` : ""}apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => data.articles)
    .catch(err => err);
}