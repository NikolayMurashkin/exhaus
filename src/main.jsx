import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { Graphics, Exhausters, ExhausterDetails } from './pages/index';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/graphics',
		element: <Graphics />,
	},
	{
		path: '/exhausters',
		element: <Exhausters />,
	},
	{
		path: '/exhauster-details',
		element: <ExhausterDetails />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
