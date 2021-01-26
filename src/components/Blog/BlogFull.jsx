import React from 'react'
import InnerPage from "../UI/innerPage/innerPage";
import Section from '../UI/section/section'

const BlogFull = props=>{

    return(
        <React.Fragment>
            <InnerPage title='Titulo del Blog' 
                    img="url('../images/portada.jpg')"/>
        <Section section>
                <div className="container">
                    <div className="row">
                        <div className="col-12" style={{marginTop: "-150px"}}>
                            <p><img src="../images/portada.jpg" alt="Titulo" className="img-fluid"/></p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 mb-5">
                            <h2>&ldquo;  Titulo &rdquo;</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p>Textos</p>
                    </div>
                    </div>
                </div>        
            </Section>

        </React.Fragment>
    )
}

export default BlogFull