import AdminLayout from "../components/layouts/admin-layout";
import "../styles/globals.css";
import "../styles/index.css";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: {session, ...pageProps}}) {
	if (Component.layout === "admin") {
		return (
            <SessionProvider session={session}>
                <AdminLayout>
                    <Component {...pageProps} />
                </AdminLayout>
            </SessionProvider>
		);
	}
	return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
