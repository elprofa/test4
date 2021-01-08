import { ContainerTopStc } from "./ContainerTop.stc";
import Pictures from '../Pictures/Pictures';
import Titre1 from '../Titre1/Titre1';
import Bouton from '../Bouton/Bouton';
import {Row,Col} from 'react-bootstrap';

import pic1 from './pic1.jpg';

function ContainerTop() {
    return (
        <ContainerTopStc>
           <Row id="row-1">
                <Col>
                    <Titre1 text="Hair & bodycare
                        goed voor je
                        gezondheid, je
                        huid en de planeet. " />
                    <Bouton id="MyBtn" text="Ontdek onze productenk" />
                </Col>
                <Col>
                    <Pictures lien={pic1} alt="picture1" id="pic1"/>
                </Col>
            </Row>
        </ContainerTopStc>
    )
}

  export default ContainerTop