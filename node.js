const express = require('express');
const app = express();

app.get('/usercache.json', async (req, res) => {
  try {
    const r = await fetch('http://185.207.166.16:12027/usercache.json');
    const data = await r.text();
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json');
    res.send(data);
  } catch (e) {
    res.status(502).json({ error: 'upstream failed' });
  }
});

app.get('/check/:name', async (req, res) => {
  try {
    const r = await fetch('http://185.207.166.16:12027/check/' + req.params.name);
    const data = await r.text();
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json');
    res.send(data);
  } catch (e) {
    res.status(502).json({ error: 'upstream failed' });
  }
});

app.listen(process.env.PORT || 3000);