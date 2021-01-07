import { BottomHeaderStc } from "./BottomHeader.stc";
import {Nav,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../Menu/Menu';

const MenuList = [{item: "ray",id: "logo"},{item: "Producten",id: ""}, {item: "Ons verhaal",id: ""}, {item: "Ingrediënten",id: ""}, {item: "Verpakking",id: ""}, {item: "Learn",id: ""}, {item: "Cart",id: "cart"}]

function BottomHeader() {
    return (
        <BottomHeaderStc >
            <Col>
                <Nav className="justify-content-center" activeKey="/home">
                 {MenuList.map(menu => <Menu key={menu.item.length} item={menu.item} id={menu.id} />)}
                </Nav>
            </Col>
        </BottomHeaderStc>
    )
}

export default BottomHeader