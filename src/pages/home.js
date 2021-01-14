import React from 'react';
import { Button, Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import CarouselBox from '../components/carouselbox';

const Home = () => {
  return (
    < div className = "home text-left mt-2">
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Some</h2>
        <CardDeck>
          <Row className="mb-4">
            <Col sm={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://avatars.mds.yandex.net/get-zen_doc/1585195/pub_5d020aa0f0e28300afb00ceb_5d0210d912148300af619bb6/scale_1200"
                />
                <Card.Body>
                  <Card.Title>Some</Card.Title>
                  <Card.Text>lkjhgfdsjhgfd jhgfds jhgfdsa jhgfdsa jhgfds jhgfds</Card.Text>
                  <Button variant="primary">Butt</Button>
                </Card.Body>
              </Card>
            </Col>             <Col sm={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://avatars.mds.yandex.net/get-zen_doc/1585195/pub_5d020aa0f0e28300afb00ceb_5d0210d912148300af619bb6/scale_1200"
                />
                <Card.Body>
                  <Card.Title>Some</Card.Title>
                  <Card.Text>lkjhgfdsjhgfd jhgfds jhgfdsa jhgfdsa jhgfds jhgfds</Card.Text>
                  <Button variant="primary">Butt</Button>
                </Card.Body>
              </Card>
            </Col> 
            <Col sm={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://avatars.mds.yandex.net/get-zen_doc/1585195/pub_5d020aa0f0e28300afb00ceb_5d0210d912148300af619bb6/scale_1200"
                />
                <Card.Body>
                  <Card.Title>Some</Card.Title>
                  <Card.Text>lkjhgfdsjhgfd jhgfds jhgfdsa jhgfdsa jhgfds jhgfds</Card.Text>
                  <Button variant="primary">Butt</Button>
                </Card.Body>
              </Card>
            </Col> 
          </Row>
          < Row className = "mb-4">
            <Col sm={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://avatars.mds.yandex.net/get-zen_doc/1585195/pub_5d020aa0f0e28300afb00ceb_5d0210d912148300af619bb6/scale_1200"
                />
                <Card.Body>
                  <Card.Title>Some</Card.Title>
                  <Card.Text>lkjhgfdsjhgfd jhgfds jhgfdsa jhgfdsa jhgfds jhgfds</Card.Text>
                  <Button variant="primary">Butt</Button>
                </Card.Body>
              </Card>
            </Col>             <Col sm={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://avatars.mds.yandex.net/get-zen_doc/1585195/pub_5d020aa0f0e28300afb00ceb_5d0210d912148300af619bb6/scale_1200"
                />
                <Card.Body>
                  <Card.Title>Some</Card.Title>
                  <Card.Text>lkjhgfdsjhgfd jhgfds jhgfdsa jhgfdsa jhgfds jhgfds</Card.Text>
                  <Button variant="primary">Butt</Button>
                </Card.Body>
              </Card>
            </Col> 
            <Col sm={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://avatars.mds.yandex.net/get-zen_doc/1585195/pub_5d020aa0f0e28300afb00ceb_5d0210d912148300af619bb6/scale_1200"
                />
                <Card.Body>
                  <Card.Title>Some</Card.Title>
                  <Card.Text>lkjhgfdsjhgfd jhgfds jhgfdsa jhgfdsa jhgfds jhgfds</Card.Text>
                  <Button variant="primary">Butt</Button>
                </Card.Body>
              </Card>
            </Col> 
          </Row>
        </CardDeck>
      </Container>
    </div>
  )
}

export default Home;