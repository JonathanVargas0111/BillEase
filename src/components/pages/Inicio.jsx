import Header from '../molecules/Header'
import InformationForm from '../organisms/InformationForm'
const Inicio = () => {
    const title = 'Bienvenido a BillEase'
    const text = ' BillEase es una aplicación amigable para la facturación que te ayuda a crear, gestionar y enviar facturas de manera fluida. Construida con React, Vite, Material UI y Firebase, BillEase combina un conjunto de funciones potente con una interfaz de usuario limpia e intuitiva.'
    return (
        <>
            <Header title={title} text={text}/>
            <InformationForm></InformationForm>
        </>
    )
}

export default Inicio