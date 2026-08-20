function logger(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // الوظيفة: يسمح بالوصول إلى الخادم من أي مصدر (Origin).
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, ngrok-skip-browser-warning",
    );
    console.log(`${new Date().toISOString()}, ${req.method} ${req.originalUrl}`);
    next();
}

module.exports = logger;
