
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let jobs = [];

app.post('/api/schedule-pickup', (req, res) => {
  const job = { id: Date.now(), ...req.body };
  jobs.push(job);
  res.json({ success: true, job });
});

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/api/accept-job', (req, res) => {
  const jobId = req.body.jobId;
  const job = jobs.find(j => j.id === jobId);
  if (job) {
    job.status = 'accepted';
    res.json({ success: true, job });
  } else {
    res.status(404).json({ error: 'Job not found' });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
