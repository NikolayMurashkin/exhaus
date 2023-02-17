import * as React from 'react';

export const Logo = (props) => (
	<svg
		width={112}
		height={19}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ cursor: 'pointer' }}
		{...props}
	>
		<path d='M17.413.525H0v3.57h17.413V.526Z' fill='#FCB53B' />
		<path d='M17.413 7.739H0v3.57h17.413V7.74Z' fill='#F57F29' />
		<path d='M17.413 14.954H0v3.57h17.413v-3.57Z' fill='#E32213' />
		<path
			d='M24.391.525v18h14.311v-3.57H27.846V11.31h10.856V7.74H27.846V4.095h10.856V.525h-14.31Z'
			fill='#000'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='m82.41.525-6.696 18h4.018l1.34-3.644h8.106l1.34 3.571h3.948L87.346.525H82.41Zm2.68 3.57 2.749 7.215H82.34l2.75-7.214Z'
			fill='#000'
		/>
		<path
			d='M96.863 18.525v-3.717h9.305c.917 0 1.692-.802 1.692-1.749 0-.947-.775-1.749-1.692-1.749h-7.543V7.74h7.543c.917 0 1.692-.802 1.692-1.75 0-.947-.775-1.749-1.692-1.749h-9.305V.597h9.446c2.82 0 5.217 2.405 5.217 5.32 0 1.385-.282 2.55-2.115 3.644 1.621.874 2.115 2.26 2.115 3.644 0 3.352-2.397 5.32-5.217 5.32h-9.446Z'
			fill='#000'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M70.92.525h-9.588v18h3.454V11.31h6.133c2.89 0 5.217-2.405 5.217-5.392 0-2.988-2.326-5.393-5.217-5.393Zm-.142 7.214h-5.992V4.17h5.992c.917 0 1.692.801 1.692 1.749 0 1.02-.775 1.821-1.692 1.821ZM57.596 5.845c0 1.384-.282 2.55-2.115 3.643 1.621.948 2.256 2.332 2.326 3.717 0 3.352-2.397 5.32-5.216 5.32h-9.729v-18h9.517c2.82 0 5.217 2.405 5.217 5.32Zm-5.428-1.676h-5.852v3.498h5.852c.916 0 1.691-.802 1.691-1.75 0-.947-.775-1.748-1.691-1.748ZM46.316 14.88h6.063c.987 0 1.763-.801 1.692-1.822 0-.947-.776-1.749-1.692-1.749h-6.063v3.571Z'
			fill='#000'
		/>
	</svg>
);
