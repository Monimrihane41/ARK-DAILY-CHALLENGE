//create error handling middleware
const error = (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });

    }

module.exports = error;