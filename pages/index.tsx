import React from "react";

const Dashboard = function() {
	return (
		<React.Fragment>
			<header>
				<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
						Dashboard
					</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
					<div className="px-4 py-8 sm:px-0">
						<h1>Dashboard</h1>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
}

Dashboard.layout = "admin"

export default Dashboard;
