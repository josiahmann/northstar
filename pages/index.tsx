import React from "react";
import MainLayout from "../components/mainLayout";
import PageHeading from "../components/pageHeading";

const Dashboard = function () {
	return (
		<React.Fragment>
			<PageHeading title="Dashboard">
            </PageHeading>
			<MainLayout>
				<h1>Dashboard</h1>
			</MainLayout>
		</React.Fragment>
	);
};

Dashboard.layout = "admin";

export default Dashboard;
