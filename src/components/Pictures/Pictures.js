import { PictureStc } from "./Pictures.stc";

const Menu = (props) => {
const {lien,id} = props;
    return (
        <PictureStc>
            <img src={lien} alt="Queen" id={id} />
        </PictureStc>
    )
}

export default Menu