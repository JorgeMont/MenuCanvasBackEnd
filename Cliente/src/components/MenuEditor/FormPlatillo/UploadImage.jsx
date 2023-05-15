import { useState } from "react";
import { FaFileUpload, FaTrashAlt } from "react-icons/fa";


const ImageUpload = ({image, setImage}) => {

    const [fileName, setFileName] = useState('Ningun archivo Seleccionado');

    return(
            <>
                <input className="input__uploaderImage btn" type="file" accept="image/*" 
                    onChange={({target: {files}}) => {
                        files[0] && setFileName(files[0].name)
                        if(files){
                            setImage(URL.createObjectURL(files[0]))
                        }
                    }}
                />

                {image ? 
                    <img className="d-block mt-2" src={image} width={100} height={100} alt={fileName}/>
                    :
                    <FaFileUpload color="#1475cf" size={40}/>
                }


                <div className="imageDelete mt-3">
                    <span><FaTrashAlt className="me-2" color="red" onClick={() => {
                        setFileName('Ningun archivo seleccionado');
                        setImage(null);
                    }} size={30}/>  Eliminar Imagen: {fileName} 
                    </span>
                </div>
            </>       
    )
}

export default ImageUpload;