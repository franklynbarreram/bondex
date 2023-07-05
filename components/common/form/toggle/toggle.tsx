import { InputProps } from 'interfaces/common';
import * as React from 'react';
import { Switch } from '@headlessui/react';

export interface ToggleProps {
	isActive: boolean;
}

export const Toggle: React.FC<
	ToggleProps & InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ isActive, name, register, rules }) => {
	const [enabled, setEnabled] = React.useState(isActive);
	return (
		<>
			<input
				id={name}
				name={name}
				type="check"
				checked={enabled}
				className="hidden"
				readOnly
				ref={register && register(name, rules).ref}
			/>
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${
					enabled ? 'bg-primary' : 'bg-gray-200'
				} relative inline-flex items-center h-6 rounded-full w-11 outline-none focus:outline-none`}
			>
				<span className="sr-only">Enable notifications</span>
				<span
					className={`${
						enabled ? 'translate-x-6 bg-gray-0' : 'translate-x-1 bg-gray-0'
					} inline-block w-4 h-4 transform  rounded-full`}
				/>
			</Switch>
		</>
	);
};
