require('dotenv').config();
const fastify = require('fastify')({ logger: true })
const fetch = require('node-fetch')

const { PORT } = process.env

fastify.get('/v1/institutions/:id', (req, res) => {
  const { id } = req.params;
  fetch('https://api.withmono.com/v1/institutions')
    .then((response) => response.json())
    .then((data) => {
      const found_institution = data.find((institution) => institution.bank_code === id)
      if (!found_institution) return res.status(404).send({ message: 'not found' })
      res.send(found_institution)
    })
    .catch((err) => console.error(err));
})

fastify.get('*', function (_req, res) {
  res.status(404).send("Please use /v1/institutions/BANK_CODE");
})

const start = async () => {
  try {
    await fastify.listen({ port: PORT })
  } catch (error) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()