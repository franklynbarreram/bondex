import * as React from 'react';
import clsx from 'clsx';

export interface TabsProps {
	itemsNavigation: Array<ItemType>;
	currentNavigation: string;
	setNavigation: any;
	taskBonus?: any;
}

type ItemType = {
	enum: string;
	option: string;
};

/**
 * Use to notificate the user something happened
 */
export const Tabs: React.FC<TabsProps> = ({
	itemsNavigation,
	currentNavigation,
	setNavigation,
	taskBonus,
}) => {
	return (
		<div className="bg-white border-b font-medium border-gray-500 overflow-x-scroll md:overflow-x-auto">
			<nav className="flex flex-row">
				{itemsNavigation.map((item: ItemType, key) => {
					return (
						<button
							key={key}
							className={clsx(
								'text-gray-500 py-4 mr-10 block focus:outline-none',
								{
									'border-b-2  border-primary': item.enum === currentNavigation,
								},
								{ ' font-semibold': item.enum === currentNavigation },
								{ ' font-medium': item.enum !== currentNavigation },
								'f-18'
							)}
							onClick={() => {
								if (item.enum !== currentNavigation) {
									setNavigation(item.enum);
									if (taskBonus) taskBonus(item);
								}
							}}
						>
							{item.option}
						</button>
					);
				})}
			</nav>
		</div>
	);
};
