import "./App.css";

import { useStyles } from "./styles/global";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <ul>
        <li>teach</li>
        <li>learn</li>
        <li>practice</li>
        <li>react</li>
        <a href="/#">react</a>
      </ul>
    </div>
  );
}

export default App;
