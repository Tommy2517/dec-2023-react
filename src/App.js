import {useEffect} from "react";
import axios from "axios";
import Cars from "./components/Cars/Cars";



function App() {
    useEffect(() => {
        axios('owu.linkpc.net/carsAPI/v1')
    },[]);

  return (
    <div>
        <Cars/>
    </div>

  );
}

export default App;
