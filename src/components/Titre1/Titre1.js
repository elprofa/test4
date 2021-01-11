import { Titre1Stc } from "./Titre1.stc";

const Titre1 = (props) => {
const {text,emplacement} = props;
    return (
        <Titre1Stc className={emplacement}>
            {text}
        </Titre1Stc>
    )
}

export default Titre1