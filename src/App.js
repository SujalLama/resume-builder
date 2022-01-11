import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import IntroScreen from "./screens/IntroScreen";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />}/>
      <Route path="cv">
      <Route path="intro" element={<IntroScreen />} />
      <Route path="" element={<IntroScreen />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
