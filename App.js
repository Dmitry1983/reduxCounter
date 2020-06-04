import React from 'react'
import { Provider } from 'react-redux'
import { AppStore } from './src/AppStore'
import store from './src/store'

const App = () => {
	return (
		<Provider store={store}>
			<AppStore />
		</Provider>
	)
}
export default App
