import * as React from 'react';
import clsx from 'clsx';
import styles from './input-radio.module.scss';
import { Typography } from '../../typography';
import { InputProps } from 'interfaces/common';

export const InputRadio: React.FC<
	InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ name, register, rules, children, className, value, ...props }) => {
	return (
		<div className={clsx(className, 'flex items-start justify-start w-full')}>
			<div className={clsx(styles.content, 'flex items-start justify-start')}>
				<input
					className={clsx(styles.checkbox)}
					type="radio"
					id={`${name}-${value}`}
					name={name}
					value={value}
					ref={register && register(name, rules).ref}
					{...props}
				/>
				<label htmlFor={`${name}-${value}`}>{name}</label>
			</div>
			<Typography type="span" className={'ml-2'}>
				<label
					htmlFor={`${name}-${value}`}
					className={clsx(
						{ 'cursor-not-allowed': props.disabled },
						{ 'cursor-pointer': !props.disabled }
					)}
				>
					{children}
				</label>
			</Typography>
		</div>
	);
};
