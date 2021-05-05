import React, {Fragment , useState, useCallback} from 'react';
import { useForm } from 'react-hook-form'

const EjemploUno = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [Entradas, setEntradas] = useState([])

  const onSubmit = useCallback((data , e) => {
    console.log(data);
    setEntradas([
      ...Entradas,
      data
    ])
    e.target.reset();
    reset();
  },[Entradas])

 

  //Aca se define la funcion borrar, que es de tipo callback. el parametro es el index definido antes
  //Primero definimos una nueva const (EntradasNoEliminadas), que es igual a la constante inicial Entradas
  //Despues eliminamos el ultimo elemento de la nueva contante
  //Por ultimo, se llama al setter de Entradas, reemplazandola por la const  EntradasNoEliminadas sin el ultimo elemento(el eliminado)
  //
  const borrar = useCallback(index => {
    const EntradasNoEliminadas = [...Entradas] 
    EntradasNoEliminadas.pop(index)
    setEntradas(EntradasNoEliminadas)
  }, [Entradas])
 
  return(

    <Fragment>
      <div className="row m-0 p-2">
        <div className="col-12 my-5 p-4  formulario">
          <h2 className="my-2 titulo">Formulario</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="nombre"
              placeholder="Ingrese Nombre"
              className="form-control my-2 "
              autoComplete="off"
              {...register("nombre", { 
                required: {value: true,message:'campo obligatorio'}, 
                minLength:{value:3, message:'Minimo 3 caracteres'},
              })}
            ></input>
            <span className="text-danger text-small d-block mb-2">{errors.nombre?.message}</span>
            
            <input
              name="Descripcion"
              placeholder="Ingrese Apellido"
              className="form-control my-2"
              autoComplete="off"
              {...register("apellido", {
                required: { value: true, message: 'campo obligatorio' },
                minLength: { value: 3, message: 'Minimo 3 caracteres' },
              })}
            />
            <span className="text-danger text-small d-block mb-2">{errors.apellido?.message}</span>

            <select className="form-select gender" aria-label="Default select example"
              {...register("gender")}>
              <option value="seleccione" hidden>Seleccione una opcion</option>
              <option value="female">femenino</option>
              <option value="male">masculino</option>
              <option value="other">otro</option>
            </select>
            <div className="col text-center">
              <button className="btn boton mt-3">Agregar</button>
            </div>
            
          </form>
          <ul className="mt-3">
            {Entradas.map((item, index) => 
              <li key={index}>
                <span>
                  {item.nombre}
                  -
                  {item.apellido}
                  -
                  {item.gender}
                  
                </span>
                {/*OnClick llama a la funcion borrar que tiene como parametro el index  */}
                <span className="borrar" onClick={() => borrar(index)}><b>Borrar</b></span>
              </li>
            )}
            
          </ul>
          
        </div>
      </div>
    </Fragment>
     
  )
}

export default EjemploUno