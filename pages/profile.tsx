import React, { useRef } from "react";
import ActionsLayout from "../components/ActionsLayout";
import BaseInput from "../components/form/BaseInput";
import MainLayout from "../components/mainLayout";
import PageHeading from "../components/pageHeading";

function EditUserProfile() {
	const [user, setUser] = React.useState({});
	const firstNameRef = useRef<HTMLInputElement | null>(null);
	const lastNameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);

	return (
		<React.Fragment>
			<PageHeading title="Edit Profile"></PageHeading>
			<MainLayout>
				<BaseInput
					label="First Name"
					name="firstName"
					type="text"
					placeholder="First Name"
					value={user?.firstName}
					refName={firstNameRef}
				/>
				<BaseInput
					label="Last Name"
					name="lastName"
					type="text"
					placeholder="Last Name"
					value={user?.lastName}
					refName={lastNameRef}
				/>
                <BaseInput
					label="Email"
					name="email"
					type="email"
					placeholder="Enter your email address"
					value={user?.email}
					refName={emailRef}
				/>
				<ActionsLayout>
					<button
						type="button"
						className="btn-secondary"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="ml-3 btn-primary"
					>
						Save
					</button>
				</ActionsLayout>
			</MainLayout>
		</React.Fragment>
	);
}

EditUserProfile.layout = "admin";
export default EditUserProfile;
