import * as React from 'react';

export const FileIcon = (props) => (
	<svg
		width={26}
		height={27}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<rect y={0.525} width={26} height={26} rx={4} fill='#FAB82E' />
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M7.586 6.777A2 2 0 0 1 9 6.192h5.333c.177 0 .347.07.472.195l4 4a.666.666 0 0 1 .195.471v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8.192a2 2 0 0 1 .586-1.415ZM9 7.525a.667.667 0 0 0-.667.667v10.666a.667.667 0 0 0 .667.667h8a.667.667 0 0 0 .667-.667v-7.333h-3.334a.667.667 0 0 1-.666-.667V7.525H9Zm6 .943 1.724 1.724H15V8.468Zm-5.333 3.057c0-.368.298-.667.666-.667h1.334a.667.667 0 1 1 0 1.334h-1.334a.667.667 0 0 1-.666-.667Zm0 2.667c0-.369.298-.667.666-.667h5.334a.667.667 0 0 1 0 1.333h-5.334a.667.667 0 0 1-.666-.666Zm0 2.666c0-.368.298-.666.666-.666h5.334a.667.667 0 0 1 0 1.333h-5.334a.667.667 0 0 1-.666-.667Z'
			fill='#FFE3B4'
		/>
	</svg>
);
