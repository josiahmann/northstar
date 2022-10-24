import dbConnect from "../../../utils/dbConnect";
import Step from "../../../models/Step";

dbConnect();

export default async (req, res) => {
	const { method } = req;
    console.log('im in the index.js file');

	switch (method) {
		case "GET":
			try {
				const steps = await Step.find(
					{}
				); /* find all the data in our database */
				res.status(200).json({ success: true, data: steps });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
            console.log('im in the POST METHOD');
            try {
				const step = await Step.create(
					req.body
				); /* create a new model in the database */
				res.status(201).json({ success: true, data: step });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
