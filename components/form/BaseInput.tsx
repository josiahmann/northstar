function BaseInput({
	onChange,
	value,
	refName,
	type,
	placeholder,
	label,
	name,
}) {
	return (
		<div className="mb-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
			<label
				htmlFor={name}
				className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
			>
				{label}
			</label>
			<div className="mt-1 sm:col-span-2 sm:mt-0">
				<input
					onChange={onChange}
					type={type}
					name={name}
					defaultValue={value}
					className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
					placeholder={placeholder}
					ref={refName}
				/>
			</div>
		</div>
	);
}
export default BaseInput;
