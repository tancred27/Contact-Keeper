import React from "react";
import * as Sentry from "@sentry/browser";
Sentry.init({
  dsn: "https://9bddc8a2bab84e87bced4216924ba7c1@sentry.io/5188802",
});

const About = () => {
  return (
    <div>
      <h1>About this App</h1>
      <p className="my-1">
        This is a full stack react app for keeping contacts
      </p>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
