import { BoutonStc } from "./Bouton.stc";

const Bouton = (props) => {
const {text,emplacement} = props;
    return (
        <BoutonStc className={emplacement}>
            {text}
        </BoutonStc>
    )
}

export default Bouton