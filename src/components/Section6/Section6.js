import {Row,Col} from 'react-bootstrap';
import Pictures from '../Pictures/Pictures';
import Paragraphe from '../Paragraphe/Paragraphe';

import pic7 from '../ContainerTop/pic7.jpg';
import pic8 from '../ContainerTop/pic8.jpg';
function Section3() {
    return (
        <Row id="row-6">
                <Col>
                    <Pictures lien={pic7} position="max-article" alt="picture7" id="pic7" />
                </Col>
                <Col>
                    <Pictures lien={pic8} alt="picture8" position="min-article" id="pic8" />
                    <Paragraphe text="Haarproducten" emplacement="p-row-6"/>
                </Col>
               
            </Row>
    );
  } 

export default Section3