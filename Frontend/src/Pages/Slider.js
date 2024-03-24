  import Carousel from 'react-bootstrap/Carousel';

  function DarkVariantExample() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 p-2"
            src="https://i.pinimg.com/564x/88/69/65/886965f68bd99a785d4e9520eb37ec64.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 p-2"
            src="https://i.pinimg.com/736x/76/d2/de/76d2de048abb5725eb407ce2bc79b251.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 p-2"
            src="https://i.pinimg.com/564x/42/77/4a/42774ae0ef283c493faf63c9777d020d.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default DarkVariantExample;