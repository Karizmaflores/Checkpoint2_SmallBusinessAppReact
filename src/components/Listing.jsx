import React from 'react'
import { Container, Paper, Chip } from '@mui/material';
import { useParams } from 'react-router';


const Listing = (props) => {
    console.log(props);
    
    const params = useParams();

    

    const listing = props.listings.find(b => b.id == params.id)

    console.log(listing);
    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{listing.Name}</h2>
                {
                    Object.keys(listing).map((key, idx) => {
                        return <Chip label={`${key}: ${listing[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Listing