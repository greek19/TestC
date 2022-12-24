import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BluescreenPage from "./component/bluescreen/bluescreenPage";
import PreQuiz from "./component/preQuiz/preQuiz";
import QuestionCard from "./component/QuestionCard";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./data/AppTheme";
import MainApp from "./component/PageElements/MainApp";
import "bootstrap/dist/css/bootstrap.min.css";
import Gift from "./component/postQuiz/gift";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.surface1};
    color: ${({ theme }) => theme.text1};
    font-size: clamp(1rem, 8vw, 1.3rem);
    > * {
      transition: 0.25s ease all;
    }
    margin: 2% 7%;
  }
  h1{
    font-size: clamp(1.2rem, 8vw, 2.8rem);
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

// const router = createBrowserRouter([
//   {
//     path: "/MerryChristmas",
//     element: <BluescreenPage></BluescreenPage>,
//   },
//   {
//     path: "/MerryChristmas/quiz",
//     element: (
//       <ThemeProvider theme={theme}>
//         <GlobalStyle />
//         <MainApp className="app">
//           <QuestionCard />
//         </MainApp>
//       </ThemeProvider>
//     ),
//   },
// ]);

root.render(
  <React.StrictMode>
    <div id="one">
      <BluescreenPage />
    </div>
    <div id="onehalf" hidden>
      <PreQuiz></PreQuiz>
    </div>
    <div id="two" hidden>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainApp className="app">
          <QuestionCard />
        </MainApp>
      </ThemeProvider>
    </div>
    <div id="gift" hidden>
      <Gift />
    </div>
    <div className="snowflakes" aria-hidden="true">
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
