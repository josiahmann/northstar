import dbConnect from "../../../utils/dbConnect";
import Step from "../../../models/Step";

dbConnect();

export default async (req, res) => {
	const { method } = req;

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
            try {
                console.log('POST: ', req.body);
				const step = await Step.create(JSON.parse(req.body)); /* create a new model in the database */
				res.status(201).json({ success: true, data: step });
			} catch (error) {
                console.log(error.message)
				res.status(400).json({ success: false, message: error.message });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
