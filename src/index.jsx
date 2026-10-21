import { createRoot } from 'react-dom/client';
import { App } from './App';
import './style.css';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter basename="/react-js-practice">
            <App />
        </BrowserRouter>
    </Provider>
);