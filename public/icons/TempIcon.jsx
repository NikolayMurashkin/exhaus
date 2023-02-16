import * as React from 'react';

export const TempIcon = ({color}) => (
	<svg
		width={17}
		height={17}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clipPath='url(#a)'>
			<path
				d='M10.613 9.97a.25.25 0 0 1-.117-.21V3.023a1.5 1.5 0 0 0-3 0V9.76a.25.25 0 0 1-.115.211A3.047 3.047 0 0 0 6 12.66a3 3 0 0 0 5.996-.136 3.047 3.047 0 0 0-1.383-2.554v0ZM8.996 4.025v8.5'
				stroke={color}
				strokeWidth={1.002}
				strokeMiterlimit={10}
				strokeLinecap='round'
			/>
			<path
				d='M8.997 14.025a1.501 1.501 0 1 0 0-3.002 1.501 1.501 0 0 0 0 3.002Z'
				fill={color}
			/>
		</g>
		<defs>
			<clipPath id='a'>
				<path
					fill='#fff'
					transform='translate(.997 .523)'
					d='M0 0h16v16H0z'
				/>
			</clipPath>
		</defs>
	</svg>
);
