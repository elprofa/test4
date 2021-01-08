import { BoutonStc } from "./Bouton.stc";

const Bouton = (props) => {
const {text} = props;
    return (
        <BoutonStc>
            {text}
        </BoutonStc>
    )
}

export default Bouton