import {Row,Col} from 'react-bootstrap';
import Pictures from '../Pictures/Pictures';
import Titre1 from '../Titre1/Titre1';
import Bouton from '../Bouton/Bouton';
import pic1 from '../ContainerTop/pic1.jpg';


function Section1() {
    return (
        <Row id="row-1">
            <Col>
                <Titre1 text="Hair & bodycare
                    goed voor je
                    gezondheid, je
                    huid en de planeet. " emplacement="e-row-1"/>
                <Bouton id="MyBtn"  text="Ontdek onze productenk" />
            </Col>
            <Col>
                <Pictures lien={pic1} alt="picture1" id="pic1"/>
            </Col>
        </Row>
    );
  } 

export default Section1