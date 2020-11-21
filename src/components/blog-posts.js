import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

export const BlogPostCard = ({data}) => (
    <Card>
        <CardContent>
            <img style={{width: '100%'}} src={data.image} />
            <h1 style={{color: 'black'}}>{data.title}</h1>
            <p style={{color: 'black'}}>{data.description}</p>
            <small>{data.date}</small>
        </CardContent>
    </Card>
)


export default function BlogPosts({posts}) {

    return (
        <Grid style={{display: 'flex'}} container spacing={5} xs={12}>
            {
            posts && posts.map(post => (
                <Grid item xs={12} sm={6}>
                    <BlogPostCard data={post.node.frontmatter} />
                </Grid>
            ))
            }
        </Grid>
    )
}