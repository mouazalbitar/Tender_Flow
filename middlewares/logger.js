function logger(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // الوظيفة: يسمح بالوصول إلى الخادم من أي مصدر (Origin).
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, ngrok-skip-browser-warning"
    );
    console.log(`${req.protocol}://${req.get("Host")}, ${req.method} ${req.originalUrl}`);
    next();
};

module.exports = logger;