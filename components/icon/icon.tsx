import clsx from 'clsx';
import * as React from 'react';
import SVG from 'react-inlinesvg';
import styles from './icon.module.scss';

interface IconProps {
	src: string;
	width?: string;
	height?: string;
	className?: string;
	pointer?: boolean;
	fillPath?: boolean;
	fillLine?: boolean;
	fillCircle?: boolean;
	fillRect?: boolean;
}

export const Icon: React.FC<IconProps> = ({
	src,
	className,
	pointer = false,
	fillPath = false,
	fillLine = false,
	fillRect = false,
	fillCircle = false,
}) => {
	return (
		<SVG
			src={src}
			className={clsx(
				'w-full max-w-full h-full max-h-full',
				className,
				{ 'cursor-pointer': pointer },
				[fillPath && styles.svgFillPath],
				[fillCircle && styles.svgFillCircle],
				[fillLine && styles.svgFillLine],
				[fillRect && styles.svgFillRectfillRect]
			)}
		/>
	);
};
