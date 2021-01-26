import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions";

import Layout from "./hoc/Layout/Layout";
import Index from "./components/Index/Index";
import Loader from "./components/Loader/Loader";

import Entity from "./components/Entitys/Entity/Entity";
import BlogFull from "./components/Blog/BlogFull";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";

const About = React.lazy(() => import("./containers/About/About"));
const Services = React.lazy(() => import("./components/Servicios/Servicios"));
const Blogs = React.lazy(() => import("./components/Blog/Blog"));
const Contact = React.lazy(() => import("./containers/Contact/Contact"));
const Entitys = React.lazy(() => import("./components/Entitys/Entitys"));

// const Entity = React.lazy(() => import("./containers/Entitys/Entity/Entity"));

class App extends Component {
  
  componentDidMount() {
    this.props.initEntitys();
    this.props.initPersons();

  }

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
          <Route
            exact
            path="/blogs"
            render={() => (
              <Suspense fallback={<Loader />}>
                <Blogs />
              </Suspense>
            )}
          />
          <Route
            path="/blogs/:nro"
            // render={() => (
            //   <Suspense fallback={<Loader />}>
            //     <Entity />
            //   </Suspense>
            // )}
            component={BlogFull}
          />
          <Route
            exact
            path="/entitys"
            render={() => (
              <Suspense fallback={<Loader />}>
                <Entitys />
              </Suspense>
            )}
          />
           <Route
            path="/entitys/:nro"
            // render={() => (
            //   <Suspense fallback={<Loader />}>
            //     <Entity />
            //   </Suspense>
            // )}
            component={Entity}
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

const mapDispatchToProps = (dispatch) => {
  return {
     initEntitys: () => dispatch(actions.initEntitys()),
     initPersons: () => dispatch(actions.initPersons()),
  };
};
export default connect(null, mapDispatchToProps)(App);
