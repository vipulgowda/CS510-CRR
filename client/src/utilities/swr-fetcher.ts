import { api } from './api';

export default async function swrFetcher(url: string): Promise<any>{
  const { data , error } = await api.get<any>(url);
  if (error) {
    throw error;
  }
  return data;
}
