import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowResize from './hooks/useWindowResize';

function App() {
    const [isLight, toggle] = useLocalStorage('light', true)
    const {width} = useWindowResize()

    const checkTheme = (isLight) => {
        if(isLight === true) {
            return 'light'
        } else {
            return 'dark'
        }
    }

    const isMobile = (windowWidth, deviceMode) => {
        if(windowWidth <= 576) {
            return 'light'
        } else {
            return checkTheme(deviceMode)
        }
    }

    console.log(isMobile(width, isLight))
    return (
        <div className={isMobile(width, isLight)}>
            {width > 576 && 
                <button onClick={() => toggle((prevState) => !prevState)}>Toggle Theme</button>
            }
            <h1>Hello World</h1>
        </div>
    );
}

export default App;