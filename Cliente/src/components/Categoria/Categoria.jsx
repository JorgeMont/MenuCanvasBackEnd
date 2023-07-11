import { MdFastfood } from "react-icons/md";


const Categoria = ({label} ) => {

    return(
        <div className="categoria__container">
            <MdFastfood />
            <p>{label}</p>
        </div>
    )
}

export default Categoria;