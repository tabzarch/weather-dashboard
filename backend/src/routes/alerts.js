import express from 'express';

const router = express.Router();
const alerts = [];

router.get('/', (req, res) => {
  res.json(alerts);
});

router.post('/', (req, res) => {
  try {
    const { city, condition } = req.body;
    if (!city || !condition) return res.status(400).json({ message: 'City and condition required' });

    const alert = {
      id: Date.now().toString(),
      city,
      condition,
      createdAt: new Date().toISOString(),
      enabled: true
    };

    alerts.push(alert);
    res.status(201).json(alert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const index = alerts.findIndex(a => a.id === id);
    if (index === -1) return res.status(404).json({ message: 'Alert not found' });
    alerts.splice(index, 1);
    res.json({ message: 'Alert removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;