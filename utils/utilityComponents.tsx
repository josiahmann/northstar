import { XCircleIcon } from '@heroicons/react/20/solid'

export function Spinner({size = 'full'}) {
    function classNames(){
        let baseClasses = `grid place-content-center`
        return size === 'full' ? baseClasses + ' h-full' : baseClasses
    }
	return (
		<div className={classNames()}>
			<div className="flex items-center gap-2 text-gray-500">
				<span className="h-8 w-8 block rounded-full border-4 border-t-blue-400 animate-spin"></span>
			</div>
		</div>
	);
}

export function ErrorComponent({ error }) {
	if (!error) {
		return null;
	}
	return (
		<div className="rounded-md bg-red-50 p-4 mb-3">
			<div className="flex">
				<div className="flex-shrink-0">
					<XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
				</div>
				<div className="ml-3">
					<p className="mb-0 font-medium text-red-800">
						{error ? error : "Something went wrong"}
					</p>
				</div>
			</div>
		</div>
	);
}
