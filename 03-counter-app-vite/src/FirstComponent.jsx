
import PropTypes from 'prop-types'


const mensaje = 'Carlos el papi..'

const getResult = (a, b) =>{
  return a + b;
}


export const FirstComponent = ( {title,subtitle}) => {

  return (
    <>  
       
        <h1>Primera Aplicacion</h1>
        <p>Soy {mensaje}</p>
        <p>Soy una ejecucion de una funcion que suma dos numeros 7 + 8 = {getResult(7,8)}</p>
        
        <p>soy {title}</p>
        <p>{subtitle}</p>
        <hr></hr>
     </>
  )
}

//para validar que nuestrar prop sean validadas
FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
}

//para validar dartos por defecto de la prop
FirstComponent.defaultProps = {
  subtitle: 'No hay sub-titulo',
}