import { store, persistor } from './store/store.js';
// import persistor from './store/store.js';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import { AbilityContext } from '@config/Can'
import ability from '@config/ability'

import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// Tailwind css
import './tailwind.css';

// i18n (needs to be bundled)
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		 <AbilityContext.Provider value={ability}>
		<Suspense>
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate
						loading={null}
						persistor={persistor}
					>
						<App />
					</PersistGate>
				</Provider>
			</BrowserRouter>
		</Suspense>
		</AbilityContext.Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
