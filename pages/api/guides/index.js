import dbConnect from "../../../utils/dbConnect";
import Guide from "../../../models/Guide";

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const guides = await Guide.find(
					{}
				); /* find all the data in our database */
				res.status(200).json({ success: true, data: guides });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
            try {
                const guide = new Guide({
                    title: req.body.title,
                    url: req.body.url
                });
            
                const result = await guide.save();
                console.log(result);
                
				res.status(201).json({ success: true, data: guide });
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
