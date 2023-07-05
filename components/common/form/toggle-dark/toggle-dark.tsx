import * as React from 'react';
import clsx from 'clsx';
import { InputProps } from 'interfaces/common';
import styles from './toggle-dark.module.scss';

export interface ToggleDarkProps {
	isActive: boolean;
}

export const ToggleDark: React.FC<
	ToggleDarkProps & InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ isActive, name, register, rules }) => {
	const [enabled, setEnabled] = React.useState(isActive);
	return (
		<>
			<div className={clsx(styles.toggleWrapper, 'my-4')}>
				<input
					id={name}
					name={name}
					type="checkbox"
					className={clsx('dn hidden')}
					checked={enabled}
					readOnly
					ref={register && register(name, rules).ref}
				/>
				<label
					htmlFor={name}
					className={styles.toggle}
					onClick={() => {
						setEnabled(!enabled);
					}}
				>
					<span className={styles.toggle__handler}>
						<span className={clsx(styles.crater, styles.crater1)}></span>
						<span className={clsx(styles.crater, styles.crater2)}></span>
						<span className={clsx(styles.crater, styles.crater3)}></span>
					</span>
					<span className={clsx(styles.star, styles.star1)} />
					<span className={clsx(styles.star, styles.star2)} />
					<span className={clsx(styles.star, styles.star3)} />
					<span className={clsx(styles.star, styles.star4)} />
					<span className={clsx(styles.star, styles.star5)} />
					<span className={clsx(styles.star, styles.star6)} />
				</label>
			</div>
		</>
	);
};
