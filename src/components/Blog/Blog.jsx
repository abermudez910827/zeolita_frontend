import React from 'react'
import InnerPage from "../UI/innerPage/innerPage";
import Section from '../UI/section/section'
import BlogItem from './BlogItem'

const Blog = props =>{
    return(
        <React.Fragment>
            <InnerPage title='Blogs' 
          img="url('images/portada.jpg')"/>
            <Section>

          <BlogItem large={true} link={0} img="images/industrial_blog_1.jpg" date="Feb 26th, 2018" title="How to handle any intercate custom design" text="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
          <BlogItem large={true} left={true} link={1} img="images/industrial_blog_1.jpg" date="Feb 26th, 2018" title="How to handle any intercate custom design" text="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />

                
            </Section>
        </React.Fragment>
    )
}

export default Blog