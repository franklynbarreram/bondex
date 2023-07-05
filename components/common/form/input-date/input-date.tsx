import * as React from 'react';
import { Input } from 'components/common/form/input';
import { InputProps } from 'interfaces/common';

export const InputDate: React.FC<
	InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = (props) => {
	return (
		<>
			<Input type="date" {...props}></Input>
		</>
	);
};
