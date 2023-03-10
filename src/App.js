import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  return (
    <div>
      <Header />
      {isUserLoggedIn ? <UserProfile /> : <Auth />}
      <Counter />
    </div>
  );
}

export default App;
