const development = {
  REACT_APP_NODE_ENV: "development",
  REACT_APP_API_URL: "http://localhost:3333",
  REACT_APP_VERSION: "1.0.4",
  REACT_APP_NAME: "Degree Calculator"
}

const staging = {
  REACT_APP_NODE_ENV: "staging",
  REACT_APP_API_URL: "http://localhost:3333",
  REACT_APP_VERSION: "1.0.11",
  REACT_APP_NAME: "Degree Calculator"
}

const production = {
  REACT_APP_NODE_ENV: "production",
  REACT_APP_API_URL: "http://localhost:3333",
  REACT_APP_VERSION: "1.0.4",
  REACT_APP_NAME: "Degree Calculator"
}

interface Config {
  REACT_APP_NODE_ENV: string;
  REACT_APP_API_URL: string;
  REACT_APP_VERSION: string;
  REACT_APP_NAME: string;
}


let config = {} as Config;

if (process.env.REACT_APP_STAGE === 'staging'){
  config = staging
} else if (process.env.REACT_APP_STAGE === 'production'){
  config = production
} else {
  config = development
}

export { config }
