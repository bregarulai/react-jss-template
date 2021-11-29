import { createUseStyles } from "react-jss";
import { baselinePX, htmlFontSize } from "./base";
import queries from "./queries";

// const objectFit = {
//   width: "100%",
//   height: "100%",
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   objectPosition: "center",
// };

export const useStyles = createUseStyles({
  "@global": {
    "*,  *::before, *::after": {
      margin: 0,
      padding: 0,
      boxSizing: "inherit",
    },
    html: {
      marginRight: "calc(100vw - 100%)",
      overflow: "hidden",
      height: "100%",
      fontFamily: "Montserrat",
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
      [queries.m]: {
        fontSize: htmlFontSize * 0.75,
      },
    },
    body: {
      boxSizing: "border-box",
      height: "100%",
    },
    a: {
      textDecoration: "none",
      color: "inherit",
    },
    ul: {
      listStyle: "none",
    },
  },
  app: {
    height: "100%",
  },
});
