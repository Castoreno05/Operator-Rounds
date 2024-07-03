const router = require("express").Router();
const { db } = require("../../config/connection");

router.post("/insertRound", (req, res) => {
	const {
		round_id,
		rig_name,
		operator,
		shift_date,
		last_time_submitted,
		last_round_performed_by,
		rounds_completed,
	} = req.body;

	const query = `INSERT INTO rounddata (round_id, rig_name, operator, shift_date, last_time_submitted, last_round_performed_by, rounds_completed) VALUES (?, ?, ?, ?, ?, ?, ?)`;

	db.query(
		query,
		[
			round_id,
			rig_name,
			operator,
			shift_date,
			last_time_submitted,
			JSON.stringify([last_round_performed_by]),
			JSON.stringify([rounds_completed]),
		],
		(err, result) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error inserting data into the database.");
			} else {
				const insertedData = {
					round_id: result.insertId,
					rig_name,
					operator,
					shift_date,
					last_time_submitted,
					last_round_performed_by,
					rounds_completed,
				};
				res.status(200).send(insertedData);
			}
		}
	);
});

router.get("/getRounds", (req, res) => {
	const query = "SELECT * FROM rounddata";

	db.query(query, (err, results) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error retrieving data from the database.");
		} else {
			console.log("Retrieved round data:", results); // Log the data to the console
			res.status(200).json(results);
		}
	});
});

router.post("/updateRound", (req, res) => {
	const {
		round_id,
		last_time_submitted,
		last_round_performed_by,
		rounds_completed,
	} = req.body;

	console.log("Received data:", {
		round_id,
		last_time_submitted,
		last_round_performed_by,
		rounds_completed,
	});

	const query = `
      UPDATE rounddata
      SET last_time_submitted = ?,
          last_round_performed_by = JSON_ARRAY_APPEND(COALESCE(NULLIF(last_round_performed_by, ''), '[]'), '$', ?),
          rounds_completed = JSON_ARRAY_APPEND(COALESCE(NULLIF(rounds_completed, ''), '[]'), '$', ?)
      WHERE round_id = ?
    `;

	db.query(
		query,
		[
			last_time_submitted,
			last_round_performed_by,
			JSON.stringify(rounds_completed),
			round_id,
		],
		(err, result) => {
			if (err) {
				console.error("Database error:", err);
				res.status(500).send("Error updating data in the database.");
			} else {
				if (result.affectedRows === 0) {
					res
						.status(404)
						.send(
							`${round_id}: No matching record found for the provided round_id.`
						);
				} else {
					const insertedData = {
						round_id: result.insertId,
						last_time_submitted,
						last_round_performed_by,
						rounds_completed,
					};
					res.status(200).send(insertedData);
				}
			}
		}
	);
});

module.exports = router;
