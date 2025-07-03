module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token === 'Bearer fake-token') {
    next();
  } else {
    res.status(401).json({ error: 'Non autorisé' });
  }
};