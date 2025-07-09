import type { NextApiRequest, NextApiResponse } from 'next';
import { apiRequest } from '../../lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await apiRequest('GET', 'api/reseller/common/categories');
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
