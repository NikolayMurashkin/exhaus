import * as React from 'react';

export const Pipe = (props) => (
	<svg
		width={400}
		height={230}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path fill='#677272' d='M11.826 229.076h388v-9h-388z' />
		<path fill='#fff' d='M11.826 226.076h388v-3h-388z' />
		<path
			d='M.826 223.576a5.5 5.5 0 0 0 5.5 5.5h6.5v-9h-12v3.5Z'
			fill='#677272'
		/>
		<path d='M3.826 223.076a3 3 0 0 0 3 3h6v-3h-9Z' fill='#fff' />
		<path fill='#677272' d='M9.825 220.985h-9V2.075h9z' />
		<path fill='#fff' d='M6.825 224.576h-3V.575h3z' />
	</svg>
);

