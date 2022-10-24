import ModalStep from "./ModalStep";
import apiClient from "../../utils/http-common";
import React from "react";
import dynamic from 'next/dynamic'

const EditorJs = dynamic(
  () => import('@natterstefan/react-editor-js'),
  { ssr: false }
)

function EditStep({ _id, title, content, onClose, fetchSteps }) {
	let editor = null;
	
	const onSave = async () => {
		try {
			const outputData = await editor.save();
            if(!_id){
                return apiClient.post('/steps', {
                    title: title,
                    content: outputData
                })
            }
            //
			return apiClient.patch(`/steps/${_id}`, {
                content: outputData
            })
		} catch (e) {
			console.log("Saving failed: ", e);
		}
	};

	const onReady = () => {
		editor.focus();
	};

    function handleSave(){
        onSave().then(() => {
            fetchSteps();
            onClose();
        });
    }

	return (
            <ModalStep onSave={handleSave} onClose={onClose} title={title}>
                <EditorJs
                    onReady={onReady}
                    data={content}
                    editorInstance={(editorInstance) => {
                        editor = editorInstance;
                    }}
                />
            </ModalStep>
	);
}
export default EditStep;
