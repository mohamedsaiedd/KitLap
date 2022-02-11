import React, { useEffect , useState  } from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { Rating } from 'semantic-ui-react'



export default function MediaCard({ product , productId }) {
  const [value, setValue] = React.useState(2);
  return (

       <Link to={`../pages/detailes/${productId}`}>
    <Card sx={{ maxWidth: 245 }} key={product.id} >
      <CardMedia
        component="img"
        height="240"
        image={product.image}
        alt="item"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">

            {product.title}

        </Typography>

        <Typography variant="body2" variant="h5" color="text.secondary">

        EGP {product.price} 

        </Typography>
      </CardContent>
      <CardActions>
      {/* <Button size="large" variant="outlined" >  */}
        <Link to="/pages/cart">         
          {/* <Icon  variant="h4" icon="ant-design:plus-outlined" /> */}
           
          </Link>
        {/* </Button> */}

        <Typography  variant="h7" >{product.category}</Typography>
        <Rating name="read-only" value={value} readOnly />
        
      </CardActions>
    </Card>
    </Link>
  )
}
