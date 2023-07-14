import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Components/Header";
import TypingBox from "./Components/TypingBox";
import { GlobalStyles } from "./Styles/global";



function App() {

  

  return (
    <>
<ToastContainer />
    <div className="canvas">

    <GlobalStyles />

<Header/>
      <TypingBox/>

      <div>Footer</div> 

    </div>
    </>
  );
}

export default App;
