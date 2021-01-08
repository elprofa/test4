import { ParagrapheStc } from "./Paragraphe.stc";

const Paragraphe = (props) => {
const {text} = props;
    return (
        <ParagrapheStc>
            {text}
        </ParagrapheStc>
    )
}

export default Paragraphe