import React from 'react'
import { Provider } from 'react-redux'
import store from './store'


const App = () => {
    console.log(store)
    return (
        <Provider store={store}>
            <div>App</div>
        </Provider>
    
  )
}

export default App