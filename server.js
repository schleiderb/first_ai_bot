const restify = require('restify')

const server = restify.createServer()
const PORT = process.env.PORT || 4044

server.use(restify.bodyParser())

/**
 * Add a POST request handler for webhook invocations
 */
server.post('/', (req, res, next) => {
  const eventType = req.body.event_type
  const eventData = req.body.data

  // Handle the LogicInvocation event type
  if (eventType === 'LogicInvocation') {
    // This is the payload you will need to provide the Init.ai Node client
    console.log(eventData.payload)
  }

  // Immediately return a 200 to acknowledge receipt of the Webhook
  res.send(200)
})

/**
 * Start the server on the configured port (default is 4044)
 */
server.listen(PORT, () => {
  console.log('%s listening at %s', server.name, server.url)
})