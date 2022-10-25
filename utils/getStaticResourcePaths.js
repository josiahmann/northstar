export default async function getStaticResourcePaths(resourceType) {
	const server = "http://localhost:3000";

    const data = await fetch(`${server}/api/${resourceType}`)
		.then((res) => res.json())
		.then((res) => res.data);

	console.log("data: ", data);

	const paths = data.map(({ _id }) => ({
		params: { id: _id },
	}));

	return {
		paths,
		fallback: false,
	};
}
