const BASE_URL = process.env.NEXT_PUBLIC_CAASIFY_URL || 'https://api.caasify.com';
const TOKEN = process.env.CAASIFY_TOKEN || 'REPLACE_WITH_TOKEN';

export async function apiRequest(method: string, path: string, params?: Record<string, any>) {
  const url = new URL(path, BASE_URL);
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  };

  const options: RequestInit = { method, headers };

  if (method === 'POST' && params) {
    options.headers = { ...headers, 'Content-Type': 'application/json' };
    options.body = JSON.stringify(params);
  } else if (method === 'GET' && params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, String(value)));
  }

  const res = await fetch(url.toString(), options);
  if (!res.ok) {
    throw new Error(`Request failed with ${res.status}`);
  }
  return res.json();
}
