import {AppBar, Toolbar , IconButton, Badge , MenuItem , Menu , Typography } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/commerce.png'
import useStyles from './navbarStyles'

export default function Navbar() {
    const classes= useStyles();
    return (
        <>
          <AppBar
             position='fixed'
             className={classes.appBar}
             color='inherit'
          >
              <Toolbar>
                  <Typography variant="h6" className={classes.title} color="inherit">
                      <img src={logo} alt='commerce.js' height="25px" className={classes.image}/>
                      Commerce.js
                  </Typography>
                  <div className={classes.grow}></div>
                  <div className={classes.button}>
                    <IconButton>
                        <Badge badgeContent={2} color="secondary"> 
                                <ShoppingCart/>
                        </Badge>
                    </IconButton>
                  </div>
                </Toolbar>
          </AppBar>   
        </>
    )
}
