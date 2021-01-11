import { ContainerTopStc } from "./ContainerTop.stc";
import Pictures from '../Pictures/Pictures';
import Paragraphe from '../Paragraphe/Paragraphe';
import Titre1 from '../Titre1/Titre1';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Section5 from '../Section5/Section5';
import Section6 from '../Section6/Section6';
import {Row,Col} from 'react-bootstrap';


function ContainerTop() {
    return (
        <ContainerTopStc>
            <Section1 />
            <Section2 />
            <Section3 />
           <Section4 />
           <Section5 />
           <Section6 />
        </ContainerTopStc>
    )
}

  export default ContainerTop