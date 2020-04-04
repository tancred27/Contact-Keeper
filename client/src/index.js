import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import App from "./App";

Sentry.init({
  dsn: "https://9bddc8a2bab84e87bced4216924ba7c1@sentry.io/5188802",
});

ReactDOM.render(<App />, document.getElementById("root"));
