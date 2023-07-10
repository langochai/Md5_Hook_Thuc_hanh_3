import './App.css'
import useClock from "./hooks/useClock.js";

function App() {
    const [time, ampm] = useClock();
    return (
        <div id="Clock-style">
            {time}
            <span> {ampm}</span>
        </div>
    );
}

export default App
