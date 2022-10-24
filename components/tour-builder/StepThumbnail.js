function StepThumbnail({ id, editStep, content }) {
	let description = content
		? content.blocks[0].data.text.substring(0, 100) + "..."
		: "";

	return (
		<div
			className="bg-gray-300 rounded-lg mr-2 relative"
			style={{
				width: "200px",
				height: "200px",
			}}
		>
			{description && (
				<div className="absolute p-3 inset-0 flex items-center text-center justify-center">
					{description}
					{/* <button className="bg-white text-gray-500 rounded-full p-2" onClick={editStep}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </button> */}
				</div>
			)}
			<div
				onClick={() => editStep(id)}
				className="cursor-pointer absolute top-0 left-0 w-full h-full bg-gray-400 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="white"
					className=" text-lg w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
					/>
				</svg>
			</div>
		</div>
	);
}
export default StepThumbnail;
