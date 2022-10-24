import React from "react";

function TourFooter({ startTour, isTourActive, cancel, saveAndClose }) {
	return (
		<div
			id="northstar-tour-footer"
			className="bg-blue-500
                            text-white
                            text-sm 
                            fixed
                            flex justify-between items-center  
                            inset-x-0
                            bottom-0
                            px-4"
			style={{
				height: "60px",
			}}
		>
			{isTourActive ? (
				<React.Fragment>
					<div className="flex flex-grow justify-between items-center">
						<p>Northstar</p>
                        <div>
                            <button className="btn-outline mr-2" onClick={cancel}>
                                Cancel
                            </button>
                            <button className="btn-primary" onClick={saveAndClose}>
                                Save and Close
                            </button>
                        </div>
					</div>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div>
						Navigate to the page you would like to start your tour on, then
						click the start tour button.
					</div>

					<button className="btn-primary" onClick={startTour}>
						Start Tour Here
					</button>
				</React.Fragment>
			)}
		</div>
	);
}

export default TourFooter;
