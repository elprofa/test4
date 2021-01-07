import { TopHeaderStc } from "./TopHeader.stc";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'react-bootstrap';

function TopHeader() {
    return (
        <TopHeaderStc >
             <Col>gratis verzending vanaf €20</Col>
        </TopHeaderStc>
    )
}

export default TopHeader