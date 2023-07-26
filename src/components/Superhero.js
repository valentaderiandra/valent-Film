import {Card, Container, Row, Col, Image} from "react-bootstrap"
import AntmanImage from "../assets/images/superhero/antman.jpg"
import AvengerImage from "../assets/images/superhero/avenger.jpg"
import BatmanImage from "../assets/images/superhero/batman.jpg"
import RobinImage from "../assets/images/superhero/robinhood.jpg"
import SpidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import SupermanImage from "../assets/images/superhero/superman.jpg"

const Superhero = () => {
  return (
    <div>
      <Container>
        <br/>
        <br/>
        <h1 className="text-white">Superhero</h1>
        <Row>
          <Col md={4} className="MovieWrapper" id="Superhero">
            <Card className= "text-dark text-center MovieImage">
              <Image src={AntmanImage}  className="images"
              alt="Antman Movies" 
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Antman</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
            </Card>
          </Col>

          <Col md={4} className="MovieWrapper">
            <Card className= "text-dark text-center MovieImage">
              <Image src={AvengerImage}  className="images"
              alt="Avenger Movies" 
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Everything</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
            </Card>
          </Col>

          <Col md={4} className="MovieWrapper">
            <Card className= "text-dark text-center MovieImage">
              <Image src={BatmanImage}  className="images"
              alt="Batman Movies" 
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Infinite</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
            </Card>
          </Col>

          <Col md={4} className="MovieWrapper">
            <Card className= "text-dark text-center MovieImage">
              <Image src={RobinImage}  className="images"
              alt="Robin Movies" 
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Joker</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
            </Card>
          </Col>

          <Col md={4} className="MovieWrapper">
            <Card className= "text-dark text-center MovieImage">
              <Image src={SpidermanImage} 
              alt="Spiderman" className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Light Year</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
            </Card>
          </Col>

          <Col md={4} className="MovieWrapper">
            <Card className= "text-dark text-center MovieImage">
              <Image src={SupermanImage} 
              alt="Superman" className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Morbius</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Superhero