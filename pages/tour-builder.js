import TourBuilder from "../components/tour-builder/TourBuilderApp";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function TourBuilderPage() {
	return (
		<QueryClientProvider client={queryClient}>
			<TourBuilder />;
		</QueryClientProvider>
	);
}
export default TourBuilderPage;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals