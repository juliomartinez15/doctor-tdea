import { useEffect, useState } from "react"
import { getConsultation } from "../services/consultationService"

function Consultation() {

    // hook
    useEffect(() => {
        
    }, [])

    const [result, setResult] = useState({
        sintomas : "",
        causas_posibles : "",
        diagnostico : "",
        recomendaciones : ""
    })

    const [sintomas, setSintomas] = useState("")

    const [cargando, setCargando] = useState(false)

    const [error, setError] = useState(false)

    const handleConsultation = async () => {
        try {
            setCargando(true)
            const response = await getConsultation(sintomas)
            setResult(response)
            setError(false)
        } catch(e) {
            console.error(e)
            setError(true)
        } finally {
            setCargando(false)
        }
    }

    const handleSintomas = (e) => {
        const texto = e.target.value
        //console.log(e.target.value)
        setSintomas(texto)
    }

    return (
        <>
            <h2>
                Médico virtual
            </h2>
            <div className="mb-3">
                <label htmlFor="consulta" className="form-label">
                    ¿Que síntomas tienes?
                </label>
                <textarea 
                    className="form-control" 
                    id="consulta" 
                    rows="3"
                    value={sintomas}
                    onChange={e => handleSintomas(e)}
                >
                </textarea>
            </div>
            {
                cargando ? (
                <button 
                    className="btn btn-outline-success" 
                    type="button" 
                    disabled
                >
                    <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                </button>
                ) 
                : (
                    <button 
                        type="button" 
                        className="btn btn-outline-success"
                        onClick={handleConsultation}
                    >
                        Consultar
                    </button>
                )
            }
            {error && (
               <div className="alert alert-danger" role="alert">
                   Ha ocurrido un error
                </div>
            ) }
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Síntomas</th>
                        <th scope="col">Causas posibles</th>
                        <th scope="col">Diagnóstico</th>
                        <th scope="col">Recomendaciones</th>
                    </tr>
                </thead>
                <tbody>

                        <tr>
                            <th scope="row">1</th>
                            <td>{result.sintomas}</td>
                            <td>{result.causas_posibles}</td>
                            <td>{result.diagnostico}</td>
                            <td>{result.recomendaciones}</td>
                        </tr>
    

                </tbody>
            </table>
        </>
    )
}

export default Consultation