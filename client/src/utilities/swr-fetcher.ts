import { api } from './api';
export default async function swrFetcher(url: string): Promise<any> {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching data from ${url}: ${error.message}`);
  }
}
