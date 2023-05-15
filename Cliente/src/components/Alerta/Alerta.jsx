const Alerta = ({alerta}) => {

    return(
        <div className= {`${alerta.error ? 'alert alert-danger text-center py-3 mt-2' : 'alert alert-success bg-#48ffac text-center py-3 mt-2 bg-opacity-10' }`}>
            {alerta.msg}
        </div>
    )
}

export default Alerta;