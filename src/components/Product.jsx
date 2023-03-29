import { Container, Grid } from "@material-ui/core";
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
export default function Section(){
return (
<div id="products">
<h1>Featured Products</h1>
<Container sx={{marginY:15}}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}><img className="img"src={product1} alt="" style={{width:"20em",height:"20em"}}/><h3>Oneplus Nord Buds</h3><h4>Price: ₹2000</h4></Grid>
      <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}><img className="img"src={product2} alt="" style={{width:"20em",height:"20em"}}/><h3>Canon tripod stand</h3><h4>Price: ₹1500</h4></Grid>
      <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}><img className="img"src={product3} alt="" style={{width:"20em",height:"20em"}}/><h3>Canon camera </h3><h4>Price: ₹90000</h4></Grid>
      <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}><img className="img"src={product4} alt="" style={{width:"20em",height:"20em"}}/><h3>HP pavilion</h3><h4>Price: ₹60000</h4></Grid>
    </Grid>
  </Container>
  </div>
);
}