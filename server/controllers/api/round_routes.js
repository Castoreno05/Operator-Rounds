const router = require("express").Router();
const { db } = require("../../config/connection");

router.post("/insertData", (req, res) => {
	const { SampleNo, Product, Sampler_Name, LotNo, Comments } = req.body;

	const query = `INSERT INTO sampledata (SampleNo, Product, Sampler_Name, LotNo, Comments) VALUES (?, ?, ?, ?, ?)`;

	db.query(
		query,
		[SampleNo, Product, Sampler_Name, LotNo, Comments],
		(err, result) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error inserting data into the database.");
			} else {
				const insertedData = {
					SampleNo: result.insertId, // Assuming your table has an auto-increment ID field
					Product,
					Sampler_Name,
					LotNo,
					Comments,
				};
				res.status(200).send(insertedData);
			}
		}
	);
});

module.exports = router;
