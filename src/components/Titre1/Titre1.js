import { Titre1Stc } from "./Titre1.stc";

const Titre1 = (props) => {
const {text} = props;
    return (
        <Titre1Stc>
            {text}
        </Titre1Stc>
    )
}

export default Titre1