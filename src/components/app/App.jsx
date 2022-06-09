import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import About from "pages/about";
import NoMatch from "pages/noMatch";
import Layout from "pages/layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
export default App;
