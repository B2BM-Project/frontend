import Mainpage from './components/mainpage';
import Login_Comp from './components/Login_Comp';
import { AuthProvider } from './context/AuthContext'; // นำเข้า AuthProvider

function App() {
  return (
    <AuthProvider>
      <Login_Comp />
      <Mainpage />
    </AuthProvider>
  );
}

export default App;
