import AdminLayout from "../../components/layouts/admin-layout";
import MainLayout from "../../components/mainLayout";
import { Guide } from "../../models/Guide";
import { Spinner } from "../../utils/utilityComponents";
import getStaticResourcePaths from "../../utils/getStaticResourcePaths";

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




export const getStaticPaths = async () => {
    const paths = await getStaticResourcePaths('guides');
    return paths;
}



export const getStaticProps = async (context) => {
    const guideId = context.params.id;    // Your dynamic page is [id].js
    const server = "http://localhost:3000";

    // const res = await fetch(`${server}/api/entries/allStories/${id}`);
    // trying to get the params._id from each story 
    // single api call (here)
    const res = await fetch(`${server}/api/guides`)
        .then(res => res.json())
        .then(data => data.data);
    // removing const { data } because the data will be returned when calling res.json()
    // instead of the calling the single api (just a fix not recommended to access [0] directly )
    return {
        props: { guide: res.filter(guide => guide._id === guideId)[0] }
    }
}


export default Guide;
