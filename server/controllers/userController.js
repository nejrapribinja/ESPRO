const { pool } = require("../db");

exports.addPost = async (req, res) => {
  try {
    const { title, description, date, author } = req.body;
    console.log(title, description, date, author);
    await pool.query(
      `insert into post (title, date_post, description, author) 
                    values ($1, $2, $3, $4)`,
      [title, date, description, author],
      (err, result) => {
        if (err) {
          console.info(err);
        }
        res.status(209).send("yes");
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.getKategorije = (req, res) => {
  try {
    pool.query(`select * from kategorija`, (err, result) => {
      if (err) {
        console.info(err);
      }
      res.json(result.rows);
      //console.log(result.rows);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getSlike = (req, res) => {
  const { id } = req.params;
  try {
    pool.query(`SELECT * FROM fotografija WHERE kategorija_id = $1`, [id], (err, result) => {
      if (err) {
        console.info(err);
      }
      res.json(result.rows);
      //console.log(result.rows);
    });
  } catch (err) {
    console.log(err);
  }
};
