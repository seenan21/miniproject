var morgan = require('morgan')

morgan.token('content', function (req, res) { return JSON.stringify(req.body) })
function setupLogger() {
    return morgan(':method :url :status :res[content-length] - :response-time ms :content')
}

module.exports = setupLogger