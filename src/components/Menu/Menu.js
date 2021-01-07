import { MenuStc } from "./Menu.stc";
import {Nav,Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = (props) => {
const {item,id} = props;
    return (
        <MenuStc className="nav-item">
            <Nav.Link href="/home" id={id}>{item} { id==='cart'?<Badge variant="light">9</Badge>:'' } </Nav.Link>
        </MenuStc>
    )
}

  export default Menu