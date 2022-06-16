import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './components/GlobalStyles'
import reportWebVitals from './reportWebVitals'
import { store } from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
const newLocal = (
    <Provider store={store}>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </Provider>
)
root.render(<React.StrictMode>{newLocal}</React.StrictMode>)
reportWebVitals()
