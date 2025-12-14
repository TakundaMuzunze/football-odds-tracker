import { Router } from 'express';
import { apiClient } from '../client';

const router = Router();

router.get('/fixtures', async (req, res) => {
  try {
    const params = req.query as Record<string, any>;
    const data = await apiClient.get('fixtures', params);
    res.json(data);
  } catch (err: any) {
    console.error('Error fetching from api: ', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;

