module.exports = async (req, res, next) => {
    try {
        let { limit, page } = req.query
        req.parameters = {
            limit: limit ? parseInt(limit) : undefined
        }
        if (page && page > 0) {
            const allowedLimit = req.parameters.limit || 10
            const offset = (page - 1) * allowedLimit;

            req.parameters = {
                ...req.parameters,
                offset,
                limit: parseInt(allowedLimit)
            }
        }
        
        next();
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'wrong query value', data: null, status: 400, success: false });
    }
};