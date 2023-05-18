import {useEffect, useState} from "react";
import axios from "axios";
import Cars from "./components/Cars/Cars";



function App() {
let q = 0;
const [up,setUp] = useState(null);


  return (
    <div>
        <button onClick={setUp}></button>
        <Cars/>
    </div>

  );
}

export default App;
