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
			last_round_performed_by,
			rounds_completed,
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

module.exports = router;
