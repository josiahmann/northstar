import MainLayout from "../../components/mainLayout";
import { Spinner } from "../../utils/utilityComponents";
import getStaticResourcePaths from "../../utils/getStaticResourcePaths";
import PageHeading from "../../components/pageHeading";
import React, { useRef, useState } from "react";
import axios from "axios";
interface GuideInterface {
	_id: "string";
	title: "string";
	steps: "array";
}

function GuidePage({
	guide,
	hasError,
}: {
	guide: GuideInterface;
	hasError: boolean;
}) {

    const [loading, setLoading] = useState(false);
    const guideNameInput = useRef(null);
    const [data, setData] = useState(guide);

    function saveGuide(){
        setLoading(true)
        axios.patch(`/api/guides/${guide._id}`, {
            title: guideNameInput.current.value
        }).then(res => {
            setData(res.data.data)
            setLoading(false)
        })
    }

    if (hasError || loading) {
		return <Spinner />;
	}

	return (
		<React.Fragment>
			<PageHeading title="Edit Guide">
                <button className="btn btn-primary" onClick={saveGuide}>Save</button>
            </PageHeading>
			<MainLayout>
				<div>
					<label
						htmlFor="guide_title"
						className="block text-sm font-medium text-gray-700"
					>
						Title
					</label>
					<div className="mt-1">
						<input
							type="text"
							name="guide_title"
							id="guide_title"
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							placeholder="Enter a title for your guide here "
                            defaultValue={data.title}
							ref={guideNameInput}
						/>
					</div>
				</div>
			</MainLayout>
		</React.Fragment>
	);
}

export const getStaticPaths = async () => {
	const paths = await getStaticResourcePaths("guides");
	return paths;
};

export const getStaticProps = async (context) => {
	const guideId = context.params.id; // Your dynamic page is [id].js
	const server = "http://localhost:3000";

	// const res = await fetch(`${server}/api/entries/allStories/${id}`);
	// trying to get the params._id from each story
	// single api call (here)
	const res = await fetch(`${server}/api/guides`)
		.then((res) => res.json())
		.then((data) => data.data);
	// removing const { data } because the data will be returned when calling res.json()
	// instead of the calling the single api (just a fix not recommended to access [0] directly )
	return {
		props: {
			guide: res.filter((guide: GuideInterface) => guide._id === guideId)[0],
		},
	};
};

GuidePage.layout = "admin";

export default GuidePage;
