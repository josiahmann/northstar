import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import AdminLayout from "../../components/layouts/admin-layout";
import MainLayout from "../../components/mainLayout";
import { Guide } from "../../models/Guide";
import { Spinner } from "../../utils/utilityComponents";

async function getData() {
	let response = await fetch('/api/guides')
    let data = await response.json()
    const paths = data.data.map((guide: Guide) => {
        return {
            params: { id: guide._id },
        }
    })
    return paths
}
 

function Guide({ guide, hasError }) {
	// const { query } = useRouter();
	// const [guide, setGuide] = useState(null);
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	axios.get(`/api/guides/${query.id}`).then((res) => {
	// 		setGuide(res.data.data);
	// 		setLoading(false);
	// 	});
	// }, [query.id]);

	if (hasError) {
		return <Spinner />;
	}

	return (
		<AdminLayout>
			<MainLayout>
				<h1>Guide: {guide.title}</h1>
			</MainLayout>
		</AdminLayout>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const itemID = context.params?.id;
	const data = await getData();
	const foundItem = data.find((item: Guide) => itemID === item.id);

	if (!foundItem) {
		return {
			props: { hasError: true },
		};
	}

	return {
		props: {
			guide: foundItem,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await getData();
	const pathsWithParams = data.map((guide: Guide) => {
		return {
			params: { something: guide.id },
		};
	});

	return {
		paths: pathsWithParams,
		fallback: true,
	};
};

export default Guide;
