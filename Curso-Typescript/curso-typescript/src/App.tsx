import { BrowserRouter } from 'react-router-dom';
import './shared/forms/YupTranslation';
import './App.css';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts/ThemeContext';
import MenuLateral from './shared/components/menu-lateral/MenuLateral';
import { AuthProvider, DrawerProvider } from './shared/contexts';
import { Login } from './shared/components';

function App() {

  return (
    <AuthProvider>
      <AppThemeProvider>
        
        <Login>

          <DrawerProvider>
              <BrowserRouter>

                <MenuLateral>
                  <AppRoutes/>
                </MenuLateral>

              </BrowserRouter>
          </DrawerProvider>

        </Login>
          
      </AppThemeProvider>
    </AuthProvider>
    
    
  )
}

export default App;
