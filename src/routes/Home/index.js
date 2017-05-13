import HomeView from './components/HomeView'
import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  path: '',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
        const Home = require('./containers/HomeContainer').default
        const reducer = require('./modules/home').default

        injectReducer(store, { key: 'home', reducer })

        cb(null, Home)
    }, 'home')
  }
})
