import "quill/dist/quill.bubble.css";
import ModalStep from "./ModalStep";
import apiClient from "../../utils/http-common";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
	ssr: false,
	loading: () => <p>Loading ...</p>,
});

const modules = {
    clipboard: {
        matchVisual: true,
    },
	toolbar: [
		[{ size: [] }],
		["bold", "italic", "underline", "strike", "blockquote"],
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" },
		],
		["link", "image", "video"],
	],
	clipboard: {
		// toggle to add extra line breaks when pasting HTML:
		matchVisual: false,
	},
};

function EditStep({ _id, title, content, onClose, fetchSteps }) {
	const [stepContent, setStepContent] = useState(content);

	const onSave = async () => {
		try {
			if (!_id) {
				return apiClient.post("/steps", {
					// title: title,
					content: stepContent,
				});
			}
			//
			return apiClient.patch(`/steps/${_id}`, {
				content: stepContent,
			});
		} catch (e) {
			console.log("Saving failed: ", e);
		}
	};

	function handleSave() {
		onSave().then(() => {
			fetchSteps();
			onClose();
		});
	}

	return (
		<ModalStep onSave={handleSave} onClose={onClose} title={title}>
			<QuillNoSSRWrapper
                preserveWhitespace
				modules={modules}
				theme="bubble"
				value={stepContent}
				onChange={setStepContent}
			/>
		</ModalStep>
	);
}
export default EditStep;
