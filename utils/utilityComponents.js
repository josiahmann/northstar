export function Spinner() {
	return (
		<div className="grid min-h-screen place-content-center">
			<div className="flex items-center gap-2 text-gray-500">
				<span className="h-8 w-8 block rounded-full border-4 border-t-blue-400 animate-spin"></span>
			</div>
		</div>
	);
}

export function Error() {
	return <div>Something went wrong :</div>;
}
