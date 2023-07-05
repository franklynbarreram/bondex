import * as React from 'react';

export interface SpinnerProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	type?: 'loadingButton' | 'loadingPage';
}

/**
 * Primary UI component for user interaction
 */
export const Spinner: React.FC<SpinnerProps> = ({ type }) => {
	return (
		<>
			{type === 'loadingButton' && (
				<svg
					className="-ml-1 mr-3 w-5 h-5 text-white animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			)}
			{type === 'loadingPage' && (
				<div className="loader w-12 h-12 border-4 border-blueTwo-600 rounded-full"></div>
			)}
		</>
	);
};
