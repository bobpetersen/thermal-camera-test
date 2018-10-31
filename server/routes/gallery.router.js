const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.get('/', (req, res) => {
//   console.log('Get gallery');
//   // This is where we will make the postgres query for the gallery images
//   // Below is my an example of my request for average levels from pond project
//   const queryText = `SELECT CAST("tstz" AS "date") AS "dt", "avg"("level") AS "avg_level"
//                      FROM "temp_level"
//                      GROUP BY CAST("tstz" AS "date")
//                      ORDER BY CAST("tstz" AS "date") DESC;`;
//   pool.query(queryText)
//     .then((results) => {
//       res.send(results.rows);
//     })
//     .catch((error) => {
//       res.sendStatus(500)
//       console.log(`ERROR on router.get: ${error}`);
//     }
//     )
// });

module.exports = router;