import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import MainContainer from './containers/MainContainer';

const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <MainContainer/>
    </div>
    </Provider>
  );
}

export default App;
