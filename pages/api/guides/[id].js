import dbConnect from "../../../utils/dbConnect";
import Guide from "../../../models/Guide";

dbConnect();

export default async (req, res) => {
	const {
		query: { id },
		method,
	} = req;
	switch (method) {
        case "GET":
			try {
				const guide = await Guide.findById(id);
				res.status(201).json({ success: true, data: guide });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
        case "PATCH":
			try {
				const guide = await Guide.findByIdAndUpdate(id, JSON.parse(req.body), { 
                    new: true,
                    runValidators: true
                });
				res.status(201).json({ success: true, data: guide });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "DELETE":
			try {
				console.log('DELETE by id: ', id);
				const guide = await Guide.deleteOne({ _id: id });
				res.status(201).json({ success: true, data: guide });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
	}
};
