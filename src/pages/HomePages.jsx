import { Container, Row, Col, Card } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { useNavigate } from "react-router-dom";

const HomePages = () => {
  let navigate = useNavigate();  
    return (
      <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="6">
                <h1 className="mb-4">
                  Temukan
                  <br />
                  <span>Bakat Kreatif</span>
                  <br />
                  Bersama Kami
                </h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae eos facere, in impedit aperiam aliquam tenetur a veniam
                  nemo, quibusdam vero reprehenderit inventore ab doloremque
                  quidem perferendis delectus enim mollitia.
                </p>
                <button
                  className="btn btn-danger btn-lg rounded-1 me-2"
                  onClick={() => navigate("/kelas")}
                >
                  Lihat Kelas
                </button>
                <button className="btn btn-outline-danger btn-lg rounded-1">
                  
                  Lihat Promo
                </button>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5">
                <img src={HeroImage} alt="hero-img" />
              </Col>
            </Row>
          </Container>
        </header>
        <div className="kelas w-100 min-vh-100 d-flex align-items-center">
          <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card className="card">
                  <Card.Img variant="top" src={HeroImage} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );   
  };
  
  export default HomePages;