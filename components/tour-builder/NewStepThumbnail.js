function NewStepThumbnail({createStep}){
    return (
        <div className="bg-gray-300 rounded-lg mr-2 relative"
            style={{
                width: "200px",
                height: "200px"
            }}>
            <div 
                onClick={createStep}
                className="cursor-pointer absolute top-0 left-0 w-full h-full bg-gray-400 rounded-lg opacity-100 hover:opacity-50 transition-opacity duration-300">
                <svg style={{
                    height: "40px",
                    width: "40px"
                }} className=" text-lg w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
            
        </div>
    )
}
export default NewStepThumbnail;