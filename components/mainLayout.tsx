function MainLayout({ children }) {
	return (
		<main className="mt-4 min-h-full">
			<div className="mx-auto max-w-5xl sm:px-6 lg:px-8 align-middle">
				{children}
			</div>
		</main>
	);
}

export default MainLayout;
