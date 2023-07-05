import * as React from 'react';
import SVG from 'react-inlinesvg';
import clsx from 'clsx';

export interface AlertProps {
	/**
	 * color background.
	 */
	color: 'success' | 'danger';
	/**
	 * Message that goes inside the alert.
	 */
	message?: string;
	/**
	 * Icon use to replace the default.
	 */
	customIcon?: string;
}

/**
 * Use to notificate the user something happened
 */
export const Alert: React.FC<AlertProps> = ({
	message,
	customIcon,
	children,
	color,
}) => {
	return (
		<div
			className={clsx(
				'flex items-center px-12 w-680 h-24 text-gray-0 text-xl rounded-10',
				{ 'bg-alert-error': color === 'danger' },
				{ 'bg-alert-success': color === 'success' }
			)}
		>
			<SVG
				src={customIcon || '/img/svg/alert/alert.svg'}
				width="37"
				height="37"
				className="mr-7"
			/>
			{message || children}
		</div>
	);
};
