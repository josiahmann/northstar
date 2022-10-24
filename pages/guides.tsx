import React, { useRef, useState } from "react";
import Modal from "../components/modal";
import axios from "axios";

function Guides() {
	const [open, openModal] = useState(false);
    const urlInput =  useRef<HTMLInputElement | null>(null);
    const guideNameInput =  useRef<HTMLInputElement | null>(null);

    function createNewGuide() : void{
        let url = urlInput.current.value
        axios.post("/api/guides", {
                name:   guideNameInput.current.value,
                url:    url
            }).then((res) => {
                console.log(res);
                goToUrl(url)
            }).catch((err) => {
                console.log(err);
            });        
    }
    function goToUrl(url): void {
        window.open(url);
    }

	return (
		<React.Fragment>
			<header>
				<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 justify-between flex items-center">
					<h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
						Guides
					</h1>
				</div>
			</header>

			<main className="mt-4 min-h-full">
				<div className="mx-auto max-w-5xl sm:px-6 lg:px-8 align-middle">
					<div className="bg-gray-50 px-4 py-8 sm:px-0 text-center">
						<h4>Nothing here yet...</h4>
						<h5>Create a new guide to get started!</h5>
						<div className="py-3">
							<button onClick={() => openModal(true)} className="btn-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 inline-block mr-2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6v12m6-6H6"
									/>
								</svg>
								Create a Guide
							</button>
						</div>
					</div>
				</div>
			</main>
			<Modal
                ok={goToUrl}
				open={open}
				onClose={() => openModal(false)}
				title="Create a new guide"
			>
				<p className="text-sm mb-4">
					Enter a name for your guide and the URL of the site where you want
					your guide to live.
				</p>

				<div>
					<label
						htmlFor="guide_name"
						className="block text-sm font-medium text-gray-700"
					>
						Name
					</label>
					<div className="mt-1">
						<input
							type="text"
							name="guide_name"
							id="guide_name"
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							placeholder="Guide Name"
						/>
					</div>
                </div>
                <div className="mt-2">

                    <label
						htmlFor="url"
						className="block text-sm font-medium text-gray-700"
					>
						URL
					</label>
					<div className="mt-1">
						<input
							type="url"
							name="url"
							id="url"
                            ref={urlInput}
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							placeholder="Website URL"
						/>
					</div>
				</div>
			</Modal>
		</React.Fragment>
	);
}
Guides.layout = "admin";
export default Guides;
