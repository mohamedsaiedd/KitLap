import React, { useEffect , useState  } from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function MediaCard({ product }) {
  return (
    <Card sx={{ maxWidth: 245 }} key={product.id}>
      <CardMedia
        component="img"
        height="240"

        image={product.image}

        alt="azia-social"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">

            {product.title}

        </Typography>
        <Typography variant="body2" color="text.secondary">

        {product.description}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{product.price}</Button>
        <Button size="small">{product.category}</Button>
      </CardActions>
    </Card>
  )
}
