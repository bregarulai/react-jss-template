import { useStyles } from "./styles/global";

function App() {
  const classes = useStyles();
  return <div className={classes.app}>Hello React JSS</div>;
}

export default App;
