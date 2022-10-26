import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Router, { useRouter } from "next/router";
import { useLocation } from "react-router-dom";

const userData = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Dashboard", path: "/" },
	{ name: "Guides", path: "/guides" },
];
const userNavigation = [
	{ name: "Your Profile", path: "/profile" },
	{ name: "Settings", path: "/" },
	{ name: "Sign out", path: "/" },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

function HeaderComponent() {
	const router = useRouter();
	const [user, setUser] = useState(userData);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [profileMenuOpen, setProfileMenuOpen] = useState(false);
	const menuRef = useRef(null);


    const handleClickOutside = (event: Event) => {
        if (menuRef.current && !menuRef?.current.contains(event.target)) {
			setProfileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

	useEffect(() => {
		if (profileMenuOpen) {
			setProfileMenuOpen(!profileMenuOpen);
		}
	}, [router.asPath]);
    
	return (
		<div ref={menuRef} className="bg-white shadow-sm">
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 justify-between">
					{/* Logo and top left nav */}
					<div className="flex">
						<div className="flex flex-shrink-0 items-center">
							<img
								className="block h-8 w-auto lg:hidden"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt="Your Company"
							/>
							<img
								className="hidden h-8 w-auto lg:block"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt="Your Company"
							/>
						</div>
						<div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
							{navigation.map((item) => (
								<Link href={item.path} key={item.name}>
									<a
										className={classNames(
											router.pathname === item.path
												? "border-indigo-500 text-gray-900"
												: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
											"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
										)}
									>
										{item.name}
									</a>
								</Link>
							))}
						</div>
					</div>

					{/* Profile and Notifications */}
					<div className="hidden sm:ml-6 sm:flex sm:items-center">
						{/* Profile dropdown */}

						<div className="relative ml-3">
							<div
								onClick={() => setProfileMenuOpen(!profileMenuOpen)}
								className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								<span className="sr-only">Open user menu</span>
								<img
									className="h-8 w-8 rounded-full"
									src={user.imageUrl}
									alt=""
								/>
							</div>

							{profileMenuOpen && (
								<Transition
									show={profileMenuOpen}
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										{userNavigation.map((item) => (
											<Link key={item.name} href={item.path}>
												<a
													className={classNames(
														router.pathname === item.path ? "bg-gray-100" : "",
														"block px-4 py-2 text-sm text-gray-700"
													)}
												>
													{item.name}
												</a>
											</Link>
										))}
									</div>
								</Transition>
							)}
						</div>
					</div>

					<div className="-mr-2 flex items-center sm:hidden">
						{/* Mobile menu button */}
						<div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							<span className="sr-only">Open main menu</span>
							{mobileMenuOpen ? (
								<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu, show/hide based on menu state. */}
			<div id="mobile-menu" className="sm:hidden">
				<div className="space-y-1 pt-2 pb-3">
					{navigation.map((item) => (
						<div
							key={item.name}
							as="a"
							href={item.path}
							className={classNames(
								router.pathname === item.path
									? "bg-indigo-50 border-indigo-500 text-indigo-700"
									: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
								"block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
							)}
							aria-current={item.current ? "page" : undefined}
						>
							{item.name}
						</div>
					))}
				</div>
				<div className="border-t border-gray-200 pt-4 pb-3">
					<div className="flex items-center px-4">
						<div className="flex-shrink-0">
							<img
								className="h-10 w-10 rounded-full"
								src={user.imageUrl}
								alt=""
							/>
						</div>
						<div className="ml-3">
							<div className="text-base font-medium text-gray-800">
								{user.name}
							</div>
							<div className="text-sm font-medium text-gray-500">
								{user.email}
							</div>
						</div>
						<button
							type="button"
							className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							<span className="sr-only">View notifications</span>
							<BellIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-3 space-y-1">
						{userNavigation.map((item) => (
							<div
								key={item.name}
								as="a"
								href={item.path}
								className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
							>
								{item.name}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderComponent;
