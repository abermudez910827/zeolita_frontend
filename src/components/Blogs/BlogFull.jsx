import React from 'react'
import InnerPage from "../UI/innerPage/innerPage";
import Section from '../UI/section/section'

const BlogFull = props =>{
    const blog=props.blogs.find(blog=> String(blog.id) === props.props.match.params.id)
    return(
        <React.Fragment>
            <InnerPage title={blog.title} 
                    img={`url('${props.img}')`} />
        <Section section>
                <div className="container">
                    <div className="row">
                        <div className="col-12" style={{marginTop: "-150px"}}>
                            <p><img src={blog.img} alt={blog.title}  className="img-fluid"/></p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 mb-5">
                            <h2>&ldquo;  {blog.title}  &rdquo;</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p>{blog.text} </p>
                    </div>
                    </div>
                </div>        
            </Section>

        </React.Fragment>
    )
}

export default BlogFull