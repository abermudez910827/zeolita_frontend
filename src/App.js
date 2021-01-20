import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Index from "./components/index/index";
import Loader from "./components/Loader/Loader";

import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";

const About = React.lazy(() => import("./containers/About/About"));
const Services = React.lazy(() => import("./components/Servicios/Servicios"));
const Contact = React.lazy(() => import("./containers/Contact/Contact"));

class App extends Component {
  
  

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/login" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route
            path="/services"
            render={() => (
              <Suspense fallback={<Loader />}>
                <Services />
              </Suspense>
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            )}
          />
          <Route path="/projects" component={Index} />
          <Route
            path="/about"
            render={() => (
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            )}
          />
          <Route path="/" exact component={Index} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
