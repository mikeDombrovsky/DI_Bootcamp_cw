const auth = (req, res, next) => {
    const { id } = req.params;
    if (id < 0) {
        res.status(401).json({ error: 'not authorized' });
    } else {
        next();
    }
}

module.exports = { auth };