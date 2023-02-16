import * as React from 'react';

export const OilIcon = ({ color }) => (
	<svg width={17} height={17} fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M13.499 10.525c0 2.762-1.739 4.501-4.501 4.501-2.762 0-4.501-1.739-4.501-4.5 0-2.965 3.226-6.966 4.216-8.124a.375.375 0 0 1 .57 0c.99 1.158 4.216 5.16 4.216 8.123Z'
			stroke={color}
			strokeWidth={1.002}
			strokeMiterlimit={10}
		/>
		<path
			d='M11.75 10.775a2.252 2.252 0 0 1-2.252 2.252'
			stroke={color}
			strokeWidth={1.002}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
