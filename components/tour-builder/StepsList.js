import React from "react";
import NewStepThumbnail from "./NewStepThumbnail";
import StepThumbnail from "./StepThumbnail";;

function StepsList({steps, clickEditStep, createStep}) {
	return (
		<React.Fragment>
				<div
					className="p-4 bg-white shadow fixed inset-x-0"
					style={{
						bottom: "60px",
					}}
				>
					<h4 className="mb-3">Steps</h4>

					<ul className="flex items-end">
                        <div className="flex flex-col">
                            <h5>Add step</h5>
                            <NewStepThumbnail
                                key={'new-step'}
                                createStep={createStep}
                            ></NewStepThumbnail>
                        </div>
						{steps.map((step, index) => {
							return (
                                <div className="flex flex-col" key={step._id}>
                                    <h5>Step {step.id}</h5>
                                    <StepThumbnail
                                        editStep={()=> clickEditStep(step)}
                                        {...step}
                                        key={index}
                                    ></StepThumbnail>
                                </div>
							);
						})}
					</ul>
				</div>

		</React.Fragment>
	);
}
export default StepsList;
