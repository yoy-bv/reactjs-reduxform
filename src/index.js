import { render } from 'react-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import routes from './routes.js';

render(
  routes,
  document.getElementById('root')
)
// ReactDOM.render(<ListUser /> , document.getElementById('root'));
// registerServiceWorker();
