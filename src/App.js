import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/aapStore';

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
      <Body/>
      </Provider>
      
    </div>
  );
}

export default App;
