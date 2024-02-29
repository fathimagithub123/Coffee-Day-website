
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FloatingLabel, Form } from 'react-bootstrap';
import Footer from './Components/Footer';


function App() {
  


  return (
    <>
      <Navbar  bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='fs-5' href="#home">Coffe Day
            <img style={{ width: '100px' }} src="https://media.tenor.com/RF8mx5SiShQAAAAj/coffee-coffee-time.gif" alt="" /></Navbar.Brand>
          <Nav className="me-auto d-flex fs-5 ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <br />

      <div className='d-flex justify-content-center align-item-center ms-2'><h4> Welcome To The <span style={{ color: 'orange' }}>World Of Coffee <i class="fa-solid fa-mug-hot fa-beat-fade" style={{ color: 'orange' }}></i></span></h4></div>
      <br />

      <div className='row'>
        <div className='col-lg-6 d-flex align-items-center'>
          <p>"Coffee, a beloved beverage enjoyed by millions around the world, has a rich history and diverse culture. With its bold and satisfying taste, coffee has become an essential part of many people's daily routines. From its origins in Ethiopia to its widespread popularity today, coffee continues to captivate people with its unique flavor and energizing effects.Coffee, one of the world's most beloved beverages, has a rich history and culture that spans continents. From its humble origins in the highlands of Ethiopia to its global popularity today, coffee has been an integral part of human society for centuries. With its invigorating aroma and  taste, it's no wonder that coffee has become an essential part of our daily routine, providing us with a boost of energy to start the day or a pick-me-up in the afternoon. Whether enjoyed black or with a touch of cream and sugar, coffee is a versatile drink that can be savored in many different forms and flavors"</p>
        </div>
        <div className='col-lg-6'>
          <img style={{ width: '100%' }} src="https://www.allrecipes.com/thmb/gk1cHP21-syS3M_dz1cr6DWxhfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1165807395-2000-28ea3eaf72f34ddaa97d9a54ca0c6025.jpg" alt="" />
        </div>
      </div>
      <br />
      <div><h4 className='d-flex justify-content-center align-item-center ms-2' > Let's Have a  <span style={{ color: 'orange' }}>Coffee Here  <i class="fa-solid fa-mug-hot fa-beat-fade" style={{ color: 'orange' }}></i></span> </h4></div>
      <br />
      <div className='cards d-flex justify-content-center align-items-center'>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{ height: '250px' }} variant="top" src="https://i0.wp.com/naivo.in/storage/2023/11/10-Steps-From-Seed-to-Cup.png?fit=500%2C574&ssl=1" />
          <Card.Body>
            <Card.Title className='d-flex justify-content-center align-items-center fw-bolder fs-5 ' style={{ color: 'white' }}> Arabica <i class="fa-solid fa-mug-hot fa-beat-fade" style={{ color: 'orange' }}></i></Card.Title>

            <Card.Text>
              Arabica coffee beans are the most popular variety worldwide. Arabica beans are native to Ethiopia but are grown in several countries throughout the world with tropical climates and high altitudes.
            </Card.Text>
            <br />
            <p className='d-flex justify-content-center align-items-center fw-bolder fs-5 ' style={{ color: 'white' }}>₹ 2000</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} >
          <Card.Img style={{ height: '250px' }} variant="top" src="https://miro.medium.com/v2/resize:fit:1400/0*wmcJXGq4d7s7Aw6o.png" />
          <Card.Body>
            <Card.Title className='d-flex justify-content-center align-items-center fw-bolder fs-5 ' style={{ color: 'white' }}>Robusta <i class="fa-solid fa-mug-hot fa-beat-fade" style={{ color: 'orange' }}></i></Card.Title>
            <Card.Text>
              With a distinctly larger and more rounded shape, Robusta coffee beans are the second most popular variety. While they are native to sub-Saharan Africa, Robusta beans are grown mostly today in Africa, Indonesia and India.
            </Card.Text>
            <p className='d-flex justify-content-center align-items-center fw-bolder fs-5 ' style={{ color: 'white' }}>₹ 1500</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{ height: '250px' }} variant="top" src="https://assets-pergikuliner.com/BGINJC59W-b4Wb2-qlTiEhPLZos=/385x290/smart/https://assets-pergikuliner.com/uploads/image/picture/1170487/picture-1543457481.jpg" />
          <Card.Body>
            <Card.Title className='d-flex justify-content-center align-items-center fw-bolder fs-5 ' style={{ color: 'white' }}>Liberica <i class="fa-solid fa-mug-hot fa-beat-fade" style={{ color: 'orange' }}></i></Card.Title>
            <Card.Text>
              Native to central and western Africa, the Liberica bean is highly tolerant of harsh climates and low altitudes, growing well in countries throughout Southeast Asia including Indonesia, Malaysia and the Philippines.
            </Card.Text>
            <br />
            <p className='d-flex justify-content-center align-items-center fw-bolder fs-5 ' style={{ color: 'white' }}>₹ 1200</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{ height: '250px' }} variant="top" src="https://thumbs.dreamstime.com/b/cup-hot-coffee-beans-ai-generated-image-there-types-bean-arabica-robusta-excelsa-liberica-272032078.jpg" />
          <Card.Body>
            <Card.Title className='d-flex justify-content-center align-items-center  fs-5 ' style={{ color: 'white' }}> Excelsa  <i class="fa-solid fa-mug-hot fa-beat-fade" style={{ color: 'orange' }}></i></Card.Title>
            <Card.Text>
              Excelsa coffee beans are known for their incredibly complex flavor profile and are commonly used in coffee blends for added dimension. Its delicious flavor also makes the Excelsa bean a popular stand-alone brew choice.
            </Card.Text>
            <p className='d-flex justify-content-center align-items-center fw-bolder fs-5 ' style={{ color: 'white' }}>₹ 1000</p>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />

      <div className='row'>

        <div className='col-lg-6 '>
          <img style={{ width: '100%' }} src="https://i.pinimg.com/originals/69/aa/8d/69aa8d0d1b81a2fc2b4d386737f0f318.gif" alt="" /></div>
        <div className='col-lg-6 '>
          <h4 style={{display:'flex',justifyContent:'center',alignItems:'center'}} className='d-flex judtify-content-center align-items-center ps-4 ms-3 mb-4'>Weekend Exclusive Offer</h4>
          <p ><h5 style={{ color: 'orange',display:'flex',justifyContent:'center',alignItems:'center' }} className='fs-5 d-flex align-items-center ps-4 ms-3 mb-4'>Prebook The Seat..Get 30% Off !!!</h5></p>

         <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> <Button variant="warning">Book Your seat
         <FloatingLabel
        controlId="floatingInput"
        label="Your Full Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Your Full Name" />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Mobile Number"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Mobile Number" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Menu"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Menu"/>
      </FloatingLabel>
      </Button>{' '}
         </div>
         </div>
         
      </div>
      <br />
      <Footer/>
    </>
  )
}

export default App
