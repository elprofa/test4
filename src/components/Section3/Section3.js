import {Row,Col} from 'react-bootstrap';
import Pictures from '../Pictures/Pictures';
import Titre1 from '../Titre1/Titre1';
import Bouton from '../Bouton/Bouton';
import pic3 from '../ContainerTop/pic3.jpg';
import Paragraphe from '../Paragraphe/Paragraphe';


function Section3() {
    return (
        <Row id="row-3">
            <Col>
                <Titre1 text="Hair & bodycare
                    goed voor je
                    gezondheid, je
                    huid en de planeet. " emplacement="e-row-3" />
                <Paragraphe text="Ray geeft om jou en je gezondheid. Je lichaam speelt daar natuurlijk een grote rol in. Onze producten zijn zorgvuldig ontwikkeld door onze apotheker Hilde Nys. Zo bevat Ray enkel propere ingrediënten die goed zijn voor je gezondheid, je lichaam én de planeet.
                    Want ook dat laatste draagt bij tot jouw gezondheid. Van onze propere ingrediënten tot onze gerecycleerde verpakkingen, we proberen de impact op onze planeet zo klein mogelijk te houden. " emplacement="p-row-3"/>
                <Bouton id="MyBtn" emplacement="btn-row-3" text="Ontdek onze productenk"  />
            </Col>
            <Col>
                <Pictures lien={pic3} alt="picture3" id="pic3" />
            </Col>
        </Row>
    );
  } 

export default Section3