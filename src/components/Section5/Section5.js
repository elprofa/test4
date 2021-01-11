import {Row,Col} from 'react-bootstrap';
import Pictures from '../Pictures/Pictures';
import Titre1 from '../Titre1/Titre1';
import Paragraphe from '../Paragraphe/Paragraphe';

import pic4 from '../ContainerTop/pic4.png';
import pic5 from '../ContainerTop/pic5.png';
import pic6 from '../ContainerTop/pic6.png';


function Section3() {
    return (
        <Row id="row-5">
                <Col>
                    <Pictures lien={pic4} position="article" alt="picture4" id="pic4" />
                    <Paragraphe text="Medium Hair Package" emplacement="p-row-5"/>
                    <Paragraphe text="2 geuren — €39" emplacement="p-row-5"/>
                </Col>
                <Col>
                    <Pictures lien={pic5} position="article" alt="picture5" id="pic5" />
                    <Paragraphe text="Medium Hair Package" emplacement="p-row-5"/>
                    <Paragraphe text="2 geuren — €39" emplacement="p-row-5"/>
                </Col>
                <Col>
                    <Pictures lien={pic6} alt="picture6" position="article" id="pic6" />
                    <Paragraphe text="Medium Hair Package" emplacement="p-row-5"/>
                    <Paragraphe text="2 geuren — €39" emplacement="p-row-5"/>
                </Col>
            </Row>
    );
  } 

export default Section3