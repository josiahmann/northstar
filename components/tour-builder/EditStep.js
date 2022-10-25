import "quill/dist/quill.bubble.css";
import ModalStep from "./ModalStep";
import EditorComponent from "./EditorComponent";
import apiClient from "../../utils/http-common";
import React, { useMemo } from "react";
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { withReact } from 'slate-react'
import { withHistory } from 'slate-history'

function EditStep({ _id, title, content, onClose, fetchSteps }) {
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])
    const initialValue = content ? content : [
        {
            type: 'paragraph',
            children: [{ text: '' }],
        },
    ]

    function handleChange(value) {
        console.log(value)
        console.log('here')
    }

	const onSave = async () => {
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
            <EditorComponent editor={editor} emitValue={handleChange} initialValue={initialValue}></EditorComponent>
		</ModalStep>
	);
}
export default EditStep;
