import { useEffect, useState } from 'react';
import './App.css';
import { config } from './config/env';
import { http } from './services/http';

interface IResponse {
  ok: boolean;
  NODE_ENV: string;
  API_URL: string;
  API_VERSION: string;
  PEM_PUBLIC: string;
}

function App() {
  const [apiInfo, setApiInfo] = useState<IResponse>({} as IResponse);

  useEffect(() => {
    http.get('/')
      .then(response => setApiInfo(response.data))
      .catch(err => console.log(err))
  }, [])

  const envs = {
    NODE_ENV: config.REACT_APP_NODE_ENV,
    NAME: config.REACT_APP_NAME,
    API_URL: config.REACT_APP_API_URL,
    VERSION: config.REACT_APP_VERSION
  }

  return (
    <div className="App">
      <h1>{envs.NAME} v{envs.VERSION}</h1>
      <h2>STAGE: {envs.NODE_ENV}</h2>
      <h2>API_URL: {envs.API_URL}</h2>

      <h1>API INFO</h1>
      <h2>Config Maps</h2>
      <h4>API_URL: {apiInfo.API_URL}</h4>
      <h4>NODE_ENV: {apiInfo.NODE_ENV}</h4>
      <h2>Deployment</h2>
      <h4>API_VERSION: {apiInfo.API_VERSION}</h4>
      <h2>Secret</h2>
      <h4>PEM_PUBLIC: {apiInfo.PEM_PUBLIC}</h4>
    </div>
  );
}

export default App;
