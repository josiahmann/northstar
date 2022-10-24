import dbConnect from "../../../utils/dbConnect";
import Step from "../../../models/Step";

dbConnect();

export default async (req, res) => {
	const {
		query: { id },
		method,
	} = req;
	switch (method) {
        case "PATCH":
			try {
				const step = await Step.findByIdAndUpdate(id, JSON.parse(req.body), { 
                    new: true,
                    runValidators: true
                });
				res.status(201).json({ success: true, data: step });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "DELETE":
			try {
				console.log('im in the [id].js file');
				const step = await Step.find(id);
				await Step.deleteOne(step);
				res.status(201).json({ success: true, data: step });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
	}
};
