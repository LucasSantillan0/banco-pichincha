
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

describe('renders learn react link', () => {
    it("should render", ()=>{
        render(
            <Provider store={store}>
              <App />
            </Provider>
          );
    })
    
});
 