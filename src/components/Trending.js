import {useEffect,useState} from "react"
import {Card, Container, Row, Col, Image} from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"
import axios from "axios"

const Trending = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get('${process.env.REACT_APP_BASE_URL}/discover/movie',{
      params:{
        api_key : process.env.REACT_APP_TMDB_KEY
      }
    }).then((response) => {
        setMovies (response.data.results)
    })
  },[])  

  return (
    <div>
      <Container>
        <br/>
        <br/>
        <h1 className="text-white">TRENDING MOVIES</h1>
        <Row>
          {movies && movies.map((result, index) =>{
            return (
              <Col md={4} className="MovieWrapper" id="Trending" key={index}>
            <Card className= "text-dark text-center MovieImage">
              <Image src={'${process.env.REACT_APP_IMG_URL}/${result.poster_path}'}  className="images"
              alt="Dune Movies" 
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">{result.title}</Card.Title>
                  <Card.Text className="text-left">{result.overview}</Card.Text>
                  <Card.Text className="text-left">{result.realease_date}</Card.Text>
                  </div>3
                </div>
            </Card>
          </Col> 
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Trending