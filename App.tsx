import { PaperProvider } from 'react-native-paper';
import { Main } from './navigator';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <StoreProvider store={store} >
      <PaperProvider>
        <Main/>
      </PaperProvider>
    </StoreProvider>
  )
}

export default App