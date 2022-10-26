function MainLayout({ children }) {
	return (
		<main className="mt-4 min-h-full py-5">
			<div className="mx-auto max-w-5xl sm:px-6 lg:px-8 align-middle">
                <div className="bg-white overflow-hidden shadow py-6 sm:px-6 lg:px-8 sm:rounded-lg">
				{children}
                </div>
			</div>
		</main>
	);
}

export default MainLayout;
