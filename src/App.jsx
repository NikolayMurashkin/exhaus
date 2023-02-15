import { Link } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div>
			<h1>Главная страница</h1>
			<ul>
				<li>
					<Link to={'/graphics'}>Графики</Link>
				</li>
				<li>
					<Link to={'/exhausters'}>Эксгаустеры</Link>
				</li>
				<li>
					<Link to={'/exhauster-details'}>
						Информация об одном эксгаустере
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default App;
