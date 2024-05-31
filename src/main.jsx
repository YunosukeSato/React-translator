import React from 'react'
import ReactDOM from 'react-dom/client'
// Internal import
import App from './components/App/App'
import './index.css'
import translationReducer from './store/store'
// External import
import { Provider } from 'react-redux'
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

// const store = configureStore(storeApp, applyMiddleware(thunk))
const store = configureStore({
    reducer: {
      translation: translationReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
})
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
