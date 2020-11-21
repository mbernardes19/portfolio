import React from 'react';
import { graphql } from 'gatsby';

export default function BlogTemplate({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <div>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </div>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }    
    }
`