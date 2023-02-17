import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { Root } from './pages/Root';
import { Graphics, Exhausters, ExhausterDetails } from './pages/index';
import './index.css';
import { store } from './app/store/index';



const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Exhausters />,
			},
			{
				path: '/graphics',
				element: <Graphics />,
			},
			{
				path: '/:exhausterId',
				element: <ExhausterDetails />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
