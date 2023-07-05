import * as React from 'react';
import { Input } from 'components/common/form/input';
import { InputProps } from 'interfaces/common';

export const InputPhone: React.FC<
	InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ name, setValueInput, rules, ...props }) => {
	const [isDelete, setIsDelete] = React.useState(false);

	const onKeyDownHandler = (event: any) => {
		var codigo = event.which || event.keyCode;
		if (codigo === 8) {
			setIsDelete(true);
		} else {
			setIsDelete(false);
		}
	};

	const handleChange = (e: any) => {
		const val = e.target.value;
		const cadena = val.replace(/\s/g, '').replaceAll('+', '');
		let newFormat = false;
		if (!isDelete) {
			if (!isNaN(cadena)) {
				let format: string = '';

				if (cadena.length === 4) {
					newFormat = true;
					format = cadena.replace(/([0-9]{4})/g, '$1 ');
				} else if (cadena.length === 7) {
					newFormat = true;
					format = cadena.replace(/([0-9]{4})([0-9]{3})/g, '$1 $2 ');
				} else if (cadena.length === 11) {
					newFormat = true;
					format = cadena.replace(
						/([0-9]{4})([0-9]{3})([0-9]{4})/g,
						'$1 $2 $3'
					);
				}
				setValueInput && setValueInput(name, newFormat ? format : val);
			} else {
				const cadena = val.substring(0, val.length - 1);
				setValueInput && setValueInput(name, cadena);
			}
		}
		setIsDelete(false);
	};

	const finalRules = React.useMemo(() => {
		return {
			...rules,
			maxLength: {
				value: 14,
				message: 'Number no valid',
			},
			minLength: {
				value: 13,
				message: 'The number has at least 11 numbers',
			},
		};
	}, [rules]);

	return (
		<>
			<Input
				name={name}
				type="tel"
				onChangeCustom={handleChange}
				onKeyDown={onKeyDownHandler}
				maxLength={13}
				rules={finalRules}
				{...props}
			></Input>
		</>
	);
};
