/**
 * A higher-order function to execute a given function with error handling.
 * @param {Function} funcToRun - The function to execute.
 * @param {Object} res - The response object to send error responses.
 */
const errorRespone = async (err, res) => {
    console.error('Error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
        stack: err.stack,
        errorObj: { err }
    });
};

module.exports = errorRespone;

