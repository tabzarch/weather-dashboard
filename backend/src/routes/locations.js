import express from 'express';

const router = express.Router();
const locations = [];

router.get('/', (req, res) => {
  res.json(locations);
});

router.post('/', (req, res) => {
  try {
    const { name, lat, lon } = req.body;
    if (!name || lat === undefined || lon === undefined) {
      return res.status(400).json({ message: 'Name, latitude, and longitude required' });
    }

    const location = {
      id: Date.now().toString(),
      name,
      lat,
      lon,
      createdAt: new Date().toISOString()
    };

    locations.push(location);
    res.status(201).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const index = locations.findIndex(l => l.id === id);
    if (index === -1) return res.status(404).json({ message: 'Location not found' });
    locations.splice(index, 1);
    res.json({ message: 'Location removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;