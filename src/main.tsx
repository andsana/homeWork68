import ReactDOM from 'react-dom/client';
import App from './App';
// import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
// import {store} from '../../webinar38/src/app/store';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  // </Provider>
);
