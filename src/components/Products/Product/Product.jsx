import {Card , CardMedia , CardContent, CardActions, Typography, IconButton} from '@material-ui/core'

import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './productStyles'

export default function Product({product}) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia
              className={classes.media} 
              image={product.source}
              title={product.name}
            />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography
                    variant="h6"
                    gutterBottom
                    >
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography 
                    variant="body1" 
                    color="textSecondary"
                    dangerouslySetInnerHTML={{ __html: product.description}}
                />
            </CardContent>
            <CardActions
                className={classes.cardActions} 
                disableSpacing
            >
                <IconButton aria-label="add to cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}
