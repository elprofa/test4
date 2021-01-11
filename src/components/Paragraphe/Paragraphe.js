import { ParagrapheStc } from "./Paragraphe.stc";

const Paragraphe = (props) => {
const {text,emplacement} = props;
    return (
        <ParagrapheStc className={emplacement}>
            {text}
        </ParagrapheStc>
    )
}

export default Paragraphe