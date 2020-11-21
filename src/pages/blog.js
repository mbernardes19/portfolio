import React from "react"
import {graphql} from 'gatsby';
import SEO from "../components/seo"
import PageBase from '../components/page-base';
import BlogPosts from "../components/blog-posts";

const BlogPage = ({data}) => (
    <PageBase>
        <SEO title="Blog Matheus Bernardes" />
        <BlogPosts posts={data.allMarkdownRemark.edges} />
    </PageBase>
)

export const query = graphql`
query {
    allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date },
        limit: 1000
    ) {
        edges {
            node {
                frontmatter {
                    title
                    image
                    date
                    path
                    description
                }
            }
        }
    }
}
`

export default BlogPage
