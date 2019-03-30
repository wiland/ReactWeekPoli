import { API_ENDPOINT, API_KEY, API_LOCALE } from "../config";
import axios from 'axios';

export async function getEvents(categories, query) {
  return await axios.get(`${API_ENDPOINT}/events/search/`,
    {
      params: {
        categories: categories ? categories : undefined,
        q: query ? query : undefined,
        locale: API_LOCALE,
      },
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    .then(response => response.data.events)
    .catch(err => err);
}

export async function getCategories() {
  return await axios.get(`${API_ENDPOINT}/categories/`,
    {
      params: {
        locale: API_LOCALE
      },
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    .then(response => response.data.categories)
    .catch(err => err);
}

