import {Row,Col} from 'react-bootstrap';
import Pictures from '../Pictures/Pictures';
import pic2 from '../ContainerTop/pic2.jpg';


function Section2() {
    return (
        <Row id="row-2">
            <Col xs={12}>
                <Pictures lien={pic2} alt="picture2" id="pic2" position="relative"/>
            </Col>
        </Row>
    );
  } 

export default Section2