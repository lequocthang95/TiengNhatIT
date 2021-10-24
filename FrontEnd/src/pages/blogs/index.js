import { Container, Grid, Typography } from "@mui/material";
import BlogCard from "../../components/cards/blogCards";

export default function Blog() {
  return (
    <div>
      <Container sx={{backgroundColor: 'hsl(205,46%,92%)'}}>
        <Typography variant="h4"> Bài viết xem nhiều</Typography>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <BlogCard/>
          </Grid>
          <Grid item sm={4}>
            <BlogCard/>
          </Grid>
          <Grid item sm={4}>
            <BlogCard/>
          </Grid>
          <Grid item sm={4}>
            <BlogCard/>
          </Grid>
          <Grid item sm={4}>
            <BlogCard/>
          </Grid>
          <Grid item sm={4}>
            <BlogCard/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
