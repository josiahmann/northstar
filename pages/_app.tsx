import AdminLayout from "../components/layouts/admin-layout";
import "../styles/globals.css";
import "../styles/index.css";

export default function App({ Component, pageProps }) {
	if (Component.layout === "admin") {
		return (
			<AdminLayout>
				<Component {...pageProps} />
			</AdminLayout>
		);
	}
	return <Component {...pageProps} />;
}
