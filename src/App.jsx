import { useNavigate } from 'react-router-dom';

import './App.css';

export default function App() {
	const navigate = useNavigate();
	const handleClick = (path) => {
		navigate(path);
	};

	return (
		<div>
			<h1>Главная страница</h1>
			<ul>
				<li>
					<button onClick={() => handleClick('/graphics')}>
						Графики
					</button>
				</li>
				<li>
					<button onClick={() => handleClick('/exhausters')}>
						Эксгаустеры
					</button>
				</li>
			</ul>
		</div>
	);
}
