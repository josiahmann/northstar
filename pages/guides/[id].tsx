import MainLayout from "../../components/mainLayout";
import { Spinner } from "../../utils/utilityComponents";
import getStaticResourcePaths from "../../utils/getStaticResourcePaths";
import PageHeading from "../../components/pageHeading";
import React from "react";
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
	if (hasError) {
		return <Spinner />;
	}

	return (
		<React.Fragment>
			<PageHeading title="Edit Guide"></PageHeading>
			<MainLayout>
                hi
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
