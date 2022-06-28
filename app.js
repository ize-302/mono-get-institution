import express from "express";
const app = express();
import fetch from 'node-fetch'

const PORT = 8080

app.use(express.json());

// api route
app.use("/v1/institutions/:id", (req, res) => {
  fetch('https://api.withmono.com/v1/institutions')
    .then((response) => response.json())
    .then((data) => {
      const found_institution = data.find((institution) => {
        return institution.bank_code === req.params.id
      })
      if (!found_institution) return res.status(404).send({message: 'not found'})
      res.send(found_institution)
    })
    .catch((err) => console.error(err));
});

// invalid route
app.all("*", (req, res) => {
  res.status(404).send("Please use /v1/institutions/BANK_CODE");
});

app.listen(PORT, () => {
  return console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});