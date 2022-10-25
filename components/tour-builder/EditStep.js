import "quill/dist/quill.bubble.css";
import ModalStep from "./ModalStep";
import apiClient from "../../utils/http-common";
import React, { useState } from "react";
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

function EditStep({ _id, title, content, onClose, fetchSteps }) {
    const [editor] = useState(() => withReact(createEditor()))
    const initialValue = content ? content : [
        {
            type: 'paragraph',
            children: [{ text: '' }],
        },
    ]

	const onSave = async () => {
        console.log(editor.children);
		try {
			if (!_id) {
				return apiClient.post("/steps", {
					// title: title,
					content: editor.children,
				});
			}
			//
			return apiClient.patch(`/steps/${_id}`, {
				content: editor.children,
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
            <Slate editor={editor} value={initialValue}>
                <Editable/>
            </Slate>
		</ModalStep>
	);
}
export default EditStep;
