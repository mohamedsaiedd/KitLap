import React, { useEffect , useState  } from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';







export default function MediaCard({ products }) {

    const [Products, SetProducts] = useState("")

    useEffect(() => {
        const url =  "https://fakestoreapi.com/products"

        const fetchData = async () => {

            const response = await fetch(url);
            const data = await response.json();
           
            SetProducts(data);

        };
        fetchData();

    },[]);
    
  return (
      
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://static.zara.net/photos///2021/I/0/2/p/0977/304/827/2/w/1567/0977304827_1_1_1.jpg?ts=1623230878604"
        alt="azia-social"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            
        user
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
