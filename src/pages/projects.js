import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button  } from "@material-ui/core";
const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects {
        edges {
          node {
            githubRepo
            createdAt
            image {
              fluid {
                src
              }
              title
            }
            liveDemo
            title
          }
        }
      }
    }
  `);
  const projectList = data.allContentfulProjects.edges;
  console.log(projectList);
  return (
      <>
        <Typography variant="h2" gutterBottom>
            My Projects
        </Typography>
        {
            projectList.map( (item, ind) => (
                <Card key={item[ind]}>
                    <CardActionArea>
                        {/* <CardMedia
                        
                        image={item.node.image.fluid.src}
                        title={item.node.image.title}
                        /> */}
                        <img width='100%' src={item.node.image.fluid.src} />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.node.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.node.githubRepo}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {/* <Button size="small" color="primary">
                        Share
                        </Button> */}
                        <Button size="small" color="primary" href={item.node.liveDemo}>
                        Live Demo
                        </Button>
                    </CardActions>
                    </Card>
            ))
        }
      </>
  )
}

export default Projects
