import { PictureStc } from "./Pictures.stc";

const Menu = (props) => {
const {lien,id,position} = props;
    return (
        <PictureStc className={position}>
            <img src={lien} alt="Queen" id={id} />
        </PictureStc>
    )
}

export default Menu