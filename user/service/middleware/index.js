
const errorHandler = (err, req, res, next) => {

    const status = (err & err.status) ? err.status : 500;
    const message = (err & err.message) ? err.message : 'Internal server Error';
    
    res.status(status).json({
        status,
        message
    });
}

module.exports = {
    errorHandler
}