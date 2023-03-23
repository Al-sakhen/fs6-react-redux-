
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Products from './pages/Products';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
