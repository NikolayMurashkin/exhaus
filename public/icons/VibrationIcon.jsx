import * as React from 'react';

export const VibrationIcon = ({color}) => (
	<svg
		width={17}
		height={17}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M7.507 6.532a3.001 3.001 0 0 0 0 3.987M10.525 10.519a3.001 3.001 0 0 0 0-3.987M5.913 4.94a5.251 5.251 0 0 0 0 7.17M12.117 12.11a5.25 5.25 0 0 0 0-7.17'
			stroke={color}
			strokeWidth={1.002}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.876 13.525a7.512 7.512 0 0 0 0-10.002M4.155 3.523a7.512 7.512 0 0 0 0 10.002'
			stroke={color}
			strokeWidth={1.002}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
