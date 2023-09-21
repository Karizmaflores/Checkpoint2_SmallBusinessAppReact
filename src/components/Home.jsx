import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
      <div className="card-container">
          {props.listings.map((listing, idx) => (
              <Card key={idx} className="card">
                  <CardContent className="text-gray">
                      <span>{listing.Name.toUpperCase()}</span>
                      <ul>
                      <li>Description: {listing["Description"]}</li>
                      <li>Hours: {listing["Hours"]}</li>
                      <li>Address: {listing["Address"]}</li>
                      </ul>
                  </CardContent>
                  <Divider />
                  <CardActions style={{ color: 'mediumblue' }}>
                      <Link to={`/listings/${listing.id}`}>See More Details</Link>
                  </CardActions>
              </Card>
          ))}
      </div>
  )
}

export default Home