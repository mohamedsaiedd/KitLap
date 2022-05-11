import React, { useEffect, useState } from "react"
import Card from '@material-ui/core/Card';
import { Link, useParams, withRouter } from "react-router-dom";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@iconify/react';
import { Rating } from 'semantic-ui-react'
import getPrice from "../utilites/itemPrice";

export default function MediaCard({ product, productId }) {

  //get disconted price

  const [value, setValue] = React.useState(2);

  return (
    <Link to={`../pages/detailes/${productId}`}>
      <Card className="mediaCard" sx={{ maxWidth: 245 }} key={product.id} >
        {
          product.discount ? <span className="mediacardDes" > {product.discount}%</span> : <span className="mediacardDes  mediacardNoDesc" > </span>
        }
        <CardMedia
          component="img"
          height="240"
          image={product.imageUrl}
          alt="item"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">

            {product.title}

          </Typography>
          <div className="pricecontent ">

            <Typography variant="body2" variant="h5" color="text.secondary">

              EGP {getPrice(product)}

            </Typography>

            {product.discount ? <Typography variant="body2" className="oldprice" variant="h7" color="text.secondary">

              EGP {product.oldprice}

            </Typography> : null
             }
          </div>
        </CardContent>
        <CardActions>
          {/* <Button size="large" variant="outlined" >  */}
          <Link to="/pages/cart">
            {/* <Icon  variant="h4" icon="ant-design:plus-outlined" /> */}

          </Link>
          {/* </Button> */}

          <Typography variant="h7" >{product.category}</Typography>
          <Rating name="read-only" value={value} readOnly />

        </CardActions>
      </Card>
    </Link>
  )
}
