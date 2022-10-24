import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import EditOptions from "./EditOptions";

export default function ModalStep({onSave, onClose, children}) {
    let [isVisible, setVisible] = useState(true);
   
    onClose = typeof onClose === "function" ? onClose : () => {
        setVisible(false);
    }

	const cancelButtonRef = useRef(null);
    const continueButtonRef = useRef(null);
    
	return (
        <Transition.Root show={isVisible} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={continueButtonRef}
				onClose={onClose}
                >
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
                            <div className="sm:my-8 sm:w-full sm:max-w-lg">
                                <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    {/* <EditOptions></EditOptions> Add this in later */}
                                    <div className="bg-white p-5" style={{"minHeight": "100px"}}>
                                        {children}
                                    </div>
                                    <div className="bg-gray-50 flex justify-between px-2 py-2">
                                        <button
                                            type="button"
                                            className="mt-3 mr-2 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={onClose}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 mr-2 inline-flex w-full justify-center rounded-md bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-400 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={onSave}
                                            ref={continueButtonRef}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
