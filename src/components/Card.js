import React from "react";
import { Paper, Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import cartActions from "./store/actions/cart";

 const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      border:'solid rgb(252, 219, 31)'
    },
  }));

const Card = ({ product, children}) =>{
    const cart = useSelector( state =>state.cart )
    const dispatch = useDispatch();
    const classes = useStyles();
    
    return(
    <>
        <Grid item xs={3}>
            <Paper className={classes.paper}>
            <Grid container direction='column'>
                <Grid item>
                <img width="100px" src={product.image} alt={product.name_product}/>
                <Typography variant='h6'>
                     {children}
                </Typography>
                 <Typography variant='subtitle1'>
                    R$ {product.price.toFixed(2)}
                </Typography>
                 </Grid>
            <Button
                color="primary"
                onClick={() => dispatch(cartActions.Add(cart, product))} 
                variant="contained"
            >Adicionar</Button>
            </Grid>
            </Paper>
        </Grid>
    </>
    )
}

export default Card;