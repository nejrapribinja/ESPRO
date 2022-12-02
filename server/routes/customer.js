const router = require("express").Router();
const korisnik = require("../controllers/customerController");

router.post("/rezervisiDatum", korisnik.rezervisiDatum);
router.get("/getKategorije", korisnik.getKategorije);
router.get("/getSlike/:id", korisnik.getSlike);

module.exports = { router };
