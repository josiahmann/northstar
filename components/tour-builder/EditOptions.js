function EditOptions() {
	return (
		<div className="absolute -translate-y-full top 0 text-sm bg-blue-500 edit-options flex shadow-xl text-white">
			<button className="bg-blue-500 hover:bg-blue-400 p-1" title="Select a Pointer step type">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
					/>
				</svg>
			</button>
			<button className="bg-blue-500 hover:bg-blue-400 p-1" title="Select a Popup step type">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
					/>
				</svg>
			</button>
		</div>
	);
}

export default EditOptions;
