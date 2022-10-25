import React, { useEffect, useRef, useState } from "react";
import Modal from "../../components/modal";
import axios from "axios";
import { Spinner } from "../../utils/utilityComponents";
import Router from "next/router";
import MainLayout from "../../components/mainLayout";
import PageHeading from "../../components/pageHeading";

function Guides() {
	const [open, openModal] = useState(false);
	const urlInput = useRef<HTMLInputElement | null>(null);
	const guideNameInput = useRef<HTMLInputElement | null>(null);
	const [guides, setGuides] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get("/api/guides").then((res) => {
			setGuides(res.data.data);
			setLoading(false);
		});
	}, [guides]);

	function createGuide(): void {
		let url = urlInput.current.value || "";
		let title = guideNameInput.current.value || "";
		setLoading(true);
		axios
			.post("/api/guides", {
				title: title,
				url: url,
			})
			.then((res) => {
				setLoading(false);
				openModal(false);
				// window.open(url);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const noGuidesFound = () => {
		return (
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
		);
	};

	const listGuides = () => {
		return (
			<ul>
				{guides.map((guide: any) => (
					<li
						onClick={() => Router.push("/guides/" + guide._id)}
						key={guide._id}
						className="curser-pointer border-t-0 border-b p-3"
					>
						<h5>{guide.title}</h5>
					</li>
				))}
			</ul>
		);
	};

	if (loading) {
		return <Spinner></Spinner>;
	}

	return (
		<React.Fragment>
			<PageHeading title="Guides">
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
			</PageHeading>
			<MainLayout>{guides.length ? listGuides() : noGuidesFound()}</MainLayout>

			<Modal
				ok={createGuide}
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
							ref={guideNameInput}
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
