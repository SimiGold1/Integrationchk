import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Paper, AppBar,Divider, Button,Avatar,Toolbar, Typography, Card, CardContent } from "@mui/material"; //Importing external library mui

// Define the MapContainer component
const MapContainer = () => {

    // Sample location data
    const item = {
        name: "Location",
        location: {
            lat: 6.4698,
            lng: 3.5852
        }
    }

    // Styles for the map
    const mapStyles = {
        height: "400px",
        width: "70%",
        margin: "auto", 
    marginTop: "50px"
    }

    const defaultCenter = {
        lat: 6.4698,
        lng: 3.5852
    }

    return (
        <div>
            <AppBar position="static">
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
        <Toolbar>
          <Typography variant="h6">Welcome, User!</Typography>
        </Toolbar>
      </AppBar>
      <Card style={{ width: "100%", margin: "auto", marginTop: "20px" }}>
        <CardContent>
         {/* Divider and description */}
        <Divider style={{ margin: "20px 0" }} />  
        <Typography>
          Explore our map and discover new locations.
        </Typography>
         {/* Ensure that the API key is valid and properly configured */}
            <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE" > 
                <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
                    <Marker key={item.name} position={item.location}/>
                    <Button variant="contained" color="primary">
          Click me </Button>
                </GoogleMap>
            </LoadScript>
            </CardContent>
      </Card>
        </div>
    )
}


 export default MapContainer;  
//  Export the MapContainer component