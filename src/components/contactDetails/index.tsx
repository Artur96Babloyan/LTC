import React from "react";
import Container from "../container";

import Map from "react-map-gl";
import {
  MapContainer,
  MapWrapper,
  Content,
  ContentWrapper,
  Title,
  Wrapper,
} from "./styles";

const ContactDetail = () => {
  return (
    <Wrapper>
      <Container>
        <MapContainer>
          <MapWrapper>
            <Map
            
              initialViewState={{
                longitude: -118.501038,
                latitude: 34.275631,
                zoom: 12,
              }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken="pk.eyJ1IjoiYWxsYW1ob21lcyIsImEiOiJja3RqajFwaTAxY2RtMm91ZW03dXI0Z2ZiIn0.w_dq7b0FfQpGgfvM8JJT5w"
            />
          </MapWrapper>
        </MapContainer>
        <ContentWrapper>
          <Title>Conatc us</Title>
          <Content>Email: lanacfp@hotmail.com</Content>
          <Content>Phone: 818-636-3292</Content>
          <Content>Fax: 747-666-2344</Content>
          <Content>Mail: 11966 Cameo Place, Granada Hills, CA 91344</Content>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default ContactDetail;
