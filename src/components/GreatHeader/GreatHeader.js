import { GreatHeaderStc } from "./GreatHeader.stc";
import TopHeader from '../TopHeader/TopHeader';
import BottomHeader from '../BottomHeader/BottomHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

function GreatHeader() {
    return (
        <GreatHeaderStc>
            <TopHeader />
            <BottomHeader />
        </GreatHeaderStc>
    )
}

  export default GreatHeader