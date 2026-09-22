const parseAboutMiddleware = (req, res, next) => {

    if (req.body.features) {
        try {
            req.body.features = JSON.parse(req.body.features);
        } catch (err) {
            return res.status(400).json({
                message: "Invalid features format.",
            });
        }
    }

    next();
};

export default parseAboutMiddleware;