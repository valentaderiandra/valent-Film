import { Container, Row, Col, Button } from 'react-bootstrap';

const intro = () => {
  return (
    <div className='intro'>
          <Container className='text-white d-flex justify-content-center align-items-center text-center'>
            <Row>
              <Col>
                <div className='title'>Valent Film</div>
                <div className='title'>Nonton Film Gak Pakai Karcis</div>
                <div className='IntroButton mt-4 text-center'>
                  <Button variant='dark'>Lihat semua list film</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
  )
}

export default intro