import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";

async function createUser(email :String, password: String){
    return await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
}
function RegisterPage() {
	const emailInputRef = useRef("");
	const passwordInputRef = useRef("");

	const onFormSubmit = async (e) => {
		e.preventDefault();
		//Getting value from useRef()
		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;
        const router = useRouter();
      
		//Validation
		if (!email || !email.includes("@") || !password) {
			alert("Invalid details");
			return;
		}
		//POST form values
        try {
            const result = await createUser(email, password);
            console.log(result)
        } catch (error) {
            console.log(error);
        }
	};

	return (
		<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<img
					className="mx-auto h-12 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					alt="Your Company"
				/>
				<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
					Register for a new account
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					Or{" "}
					<Link href="/login">
						<a className="font-medium text-indigo-600 hover:text-indigo-500">
							sign in to your account
						</a>
					</Link>
				</p>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form
						onSubmit={onFormSubmit}
						className="space-y-6"
						action="#"
						method="POST"
					>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email address
							</label>
							<div className="mt-1">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									ref={emailInputRef}
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<div className="mt-1">
								<input
									id="password"
									name="password"
									type="password"
									ref={passwordInputRef}
									autoComplete="current-password"
									required
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									Forgot your password?
								</a>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
