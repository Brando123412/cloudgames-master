import './App.css'
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Build.loader.js",
        dataUrl: "/Build.data.unityweb",
        frameworkUrl: "/Build.framework.js.unityweb",
        codeUrl: "/Build.wasm.unityweb",
    });

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Proyecto Semana 3</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
            </div>
        </div>
    );
}


export default App
