import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions";

import Layout from "./hoc/Layout/Layout";
import Index from "./components/Index/Index";
import Loader from "./components/UI/Loader/Loader";
import Entity from "./components/Entitys/Entity/Entity";
import BlogFull from "./components/Blogs/BlogFull";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";

const About = React.lazy(() => import("./containers/About/About"));
const Services = React.lazy(() => import("./components/Servicios/Servicios"));
const Blogs = React.lazy(() => import("./components/Blogs/Blogs"));
const Contact = React.lazy(() => import("./containers/Contact/Contact"));
const Entitys = React.lazy(() => import("./components/Entitys/Entitys"));

// const Entity = React.lazy(() => import("./containers/Entitys/Entity/Entity"));

class App extends Component {
  
  componentDidMount() {
    this.props.initDataSite();
  }

  

  render() {
    let page =(
      
    <Layout entidades={this.props.siteData.entidades} >
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
              <Blogs blogs={this.props.siteData.entidad_pric.blogs}/>
            </Suspense>
          )}
        />
        <Route
          path="/blogs/:id"
          render={(props) => (
              <BlogFull props={props} img={this.props.siteData.entidad_pric.foto_portada} blogs={this.props.siteData.entidad_pric.blogs}/>
          )}
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
          component={Entity}
        />
        {/* <Route path="/projects" component={Index} /> */}
        <Route
          path="/about"
          render={() => (
            <Suspense fallback={<Loader />}>
              <About entidad={this.props.siteData.entidad_pric} />
            </Suspense>
          )}
        />
        <Route path="/" exact render={() => (
            <Index 
            banners={this.props.siteData.banners}
            entidades={this.props.siteData.entidades} 
            mensajes={this.props.siteData.mensajes} 
            blogs={this.props.siteData.entidad_pric.blogs} 
            articulos={this.props.siteData.entidad_pric.articulos} 
            testimonios={this.props.siteData.entidad_pric.testimonios} 
            />
          )} />

        <Redirect to="/" />
      </Switch>
    </Layout>
   ) 
   
    if (this.props.loading) {
        page= <Loader fullscreen={true} />
         }
    
    
    return (
      page
    );
  }
}

const mapStateToProps = (state) => {
  return {
    siteData: state.site.dataSite[0],
    loading: state.site.loading,
    errors: state.site.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     initDataSite: () => dispatch(actions.initDataSite()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
