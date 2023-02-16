import * as React from 'react';

export const BtnIcon = (props) => (
	<svg
		width={40}
		height={41}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<rect y={0.525} width={40} height={40} rx={5} fill='#FAB82E' />
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M10 14.235a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Z'
			fill='#fff'
		/>
	</svg>
);

