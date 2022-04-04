import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl mt-5'>Ques-1:What is context API?</h1>
            <p className='text-3xl mt-5'>Ans:Acutually Context API is a new feature added in version 16.3 of React for make it easy.Now it is very popular.The context API is a react structer that enables us to exchance unique details and assist in solving prop-drilling from all levels of our application.The React Contest API is a way for a React app to effectively produce global variables that can be passed around.This is the alternative to "prop-drilling" or moving props from grandparent to child to parent.Context is also touted as an easier,lighter approch to state management using Redux.</p>
            <h1 className='text-4xl mt-5'>Ques-2:What is Semantic tag?</h1>
            <p className='text-3xl mt-5'>Ans:Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation.Such as (p) tag indicates that that the enclosed text is a paragraph.This is both semantic and presentational because people know what paragraphs are,and browsers know how to display them.Such as (b and i) tag are not semantic.They define only how the text should look (bold and italic),and don't provide any additional meaning to the markup.There are many more semantic HTML tags to use as we can build a standards-compliant website.It can drive goal of any web page.Now is is very populer for every users.</p>
            <h1 className='text-4xl mt-5'>Ques-2:What is different between inline and inline blog element?</h1>
            <p className='text-3xl mt-5'>Ans:There are some different between inline and inline block element.Such as:Inline the element doesn't start on a new line and only occupy just the width it requires.We can't set the width and height.Inline-block it's formatted just like the inline element,where it doesn't start on a new line.But, we can set width and height values.</p>
        </div>
    );
};

export default Blogs;