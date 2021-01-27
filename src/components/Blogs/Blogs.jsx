import React from 'react'
import InnerPage from "../UI/innerPage/innerPage";
import Section from '../UI/section/section'
import BlogItem from './Blog/Blog'

const Blog = props =>{

    const blogs = props.blogs.map((blog,index)=>{
            console.log(index)
      return(
        <BlogItem left={index % 2 === 0 ? true : false } key={blog.id} large={true} link={blog.id} img={blog.img} date={blog.date} 
        title={blog.title}
        text={blog.text} />

      )
    })

    return(
        <React.Fragment>
            <InnerPage title='Blogs' 
          img="url('images/portada.jpg')"/>
            <Section>
              {blogs}                
            </Section>
        </React.Fragment>
    )
}

export default Blog