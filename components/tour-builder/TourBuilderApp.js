import React, { useState } from "react";
import StepsList from "./StepsList";
import EditStep from "./EditStep";
import apiClient from "../../utils/http-common";
import { useQuery } from "react-query";
import { Spinner, Error } from "../../utils/utilityComponents";
import TourFooter from "./TourFooter";

function TourBuilderApp() {
	const [editing, setEditing] = useState(false);
	const [currentStep, setStep] = useState(null);
	const [isTourActive, setTourActive] = useState(false);

	const getSteps = async () => {
		return apiClient.get("/steps").then((res) => res.data.data);
	};

    function handleCreateStep(){
        setEditing(true);
        setStep(null);
    }

	function handleEditStep(step) {
		setStep({...step });
		setEditing(true);
	}

	function stopEditing() {
		setEditing(false);
		setStep(null);
	}

	function saveAndClose() {
		setEditing(false);
		setTourActive(false);
	}

	// Todo - do we need this
	function startTour() {
		// This is meant to toggle full height from the iframe parent
		setTourActive(true);
		window.parent.postMessage(
			{
				message: "Toggle Full Height",
			},
			"*"
		);
	}

	const { isLoading, data, error, refetch } = useQuery(
		"query-steps",
		getSteps,
		{
			refetchOnWindowFocus: false,
		}
	);

	if (isLoading) {
		return <Spinner></Spinner>;
	}

	if (error) {
		return <Error></Error>;
	}

	if (editing) {
		return (
			<EditStep
				onClose={stopEditing}
				{...currentStep}
				fetchSteps={refetch}
			></EditStep>
		);
	}

	return (
		<React.Fragment>
			{isTourActive && (
				<StepsList steps={data}
                    clickEditStep={handleEditStep}
                    createStep={handleCreateStep}></StepsList>
			)}
			<TourFooter
				startTour={startTour}
				isTourActive={isTourActive}
				cancel={()=>setTourActive(false)}
				saveAndClose={saveAndClose}
			></TourFooter>
		</React.Fragment>
	);
}

export default TourBuilderApp;
