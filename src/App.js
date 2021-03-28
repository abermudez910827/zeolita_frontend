import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions";

import Layout from "./hoc/Layout/Layout";
import Index from "./components/Index/Index";
import Loader from "./components/UI/Loader/Loader";
import Error from "./components/UI/Error/Error";
import Entidad from "./components/Entidades/Entidad/Entidad";
import BlogFull from "./components/Blogs/BlogFull";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";

const About = React.lazy(() => import("./components/About/About"));
const Services = React.lazy(() => import("./components/Servicios/Servicios"));
const Blogs = React.lazy(() => import("./components/Blogs/Blogs"));
const Contact = React.lazy(() => import("./containers/Contact/Contact"));
const Entidades = React.lazy(() => import("./components/Entidades/Entidades"));

// const Entidad = React.lazy(() => import("./containers/Entidades/Entidad/Entidad"));

class App extends Component {
  
  componentDidMount() {
    this.props.authCheckState();
    this.props.initDataSite();
  }

  

  render() {
    let page =(
      
    <Layout siteData={this.props.siteData} >
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route
          path="/services"
          render={() => (
            <Suspense fallback={<Loader />}>
              <Services
              entidad={this.props.siteData.entidad_pric} 
              
              />
            </Suspense>
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <Suspense fallback={<Loader />}>
              <Contact entidad={this.props.siteData.entidad_pric}  />
            </Suspense>
          )}
        />
        <Route
          exact
          path="/blogs"
          render={() => (
            <Suspense fallback={<Loader />}>
              <Blogs blogs={this.props.siteData.entidad_pric.blogs} entidad_img={this.props.siteData.entidad_pric.foto_portada} />
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
              <Entidades
            entidades={this.props.siteData.entidades} 
            entidad_img={this.props.siteData.entidad_pric.foto_portada} 
            />
            </Suspense>
          )}
        />
         <Route
          path="/entitys/:nro"
          render={(props) => (
            <Entidad props={props} entidades={this.props.siteData.entidades}/>
        )}
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

    if (this.props.errors) {

    page= <Error fullscreen={true} mensaje={"Upps ocurrió un error inesperado"} error={String(this.props.errors)} />
    
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
     authCheckState: () => dispatch(actions.authCheckState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
