import { 
  Typography, AppBar, Card, CardActions,  CardContent,  CardMedia,  CssBaseline,  Grid,  Toolbar,  Container, Button, Paper } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Box } from "@mui/system";

const cards = [1,2,3,4,5,6,7,8,9]
function App() {
  return (
    <>
    <CssBaseline/>
    <AppBar position= "relative" sx={{mb:4}}>
      <Toolbar >

        <PhotoCamera sx={{mr:'20px'}} />
        <Typography variant= "h6">
            Photo Album
        </Typography>
      </Toolbar>
    </AppBar>

    <main>
   
      <div>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color='textPrimary' gutterBottom>
            Photo Album
          </Typography>
          <Typography variant="h5" align="center" color='textSecondary' paragraph>
            Hi, Photo Album Hi, Photo Album
            Hi, Photo Album Hi, Photo Album
            Hi, Photo Album
            
          </Typography>
          <div>
            <Grid container spacing={2}  justifyContent='center' >
                <Grid item>
                  <Button variant= 'contained' >See my Photos</Button>

                </Grid>
                <Grid item>
                  <Button variant= 'outlined' >secondary Action</Button>

                </Grid>
                
            </Grid>

          </div>
        </Container>
        </div>
        <Container maxWidth= 'md' sx={{py:8 }}>
          <Grid container spacing={4}>
            {
              cards.map((card)=>(

                <Grid item key={card}  xs={12} sm={6} md={4} >
                  <Card sx={{
                    height:'100%',
                    display:'flex',
                    flexDirection:"column"
                    }}>

                    <CardMedia component="img"
                      sx={{
                        
                        pt: '56.25%',
                      }}
                      image='https://source.unsplash.com/random'
                      title= 'image..'
                    />
    
                    <CardContent sx={{flexGrow:1}}>
    
                      <Typography variant="h5" gutterBottom>
                        Heading
                        <Typography variant="subtitle1" >
                        Media Card to describe the contnet
                        Media Card to describe the contnet
                        
                        </Typography> 
                      </Typography>
    
                    </CardContent>
                    <CardActions>
                      <Button size= 'small' color ='primary'> view</Button>
                      <Button size= 'small' color ='primary'> edit</Button>
                      
                    </CardActions>
                    
                  
                  </Card>
                
                </Grid>
                
              ))
            }
          
          </Grid>
        </Container>
    </main>
    <Box component='footer' sx= {{ p: 6}}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" align="center" >
        Something here to give footer a purpose!
      </Typography>
    </Box>
    </>
  );
}

export default App;
