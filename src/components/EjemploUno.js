import React, {Fragment , useState} from 'react';
import { useForm } from 'react-hook-form'

const EjemploUno = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [Entradas, setEntradas] = useState([])

  const onSubmit = (data , e) => {
    console.log(data);
    setEntradas([
      ...Entradas,
      data
    ])
    e.target.reset();
    reset();
  }
  

 
  return(

    <Fragment>
      <div class="row m-0 p-2">
        <div className="col-12 my-5 p-4  formulario">
          <h2 className="my-2 titulo">Formulario</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="nombre"
              placeholder="Ingrese Nombre"
              className="form-control my-2 "
              autocomplete="off"
              {...register("nombre", { 
                required: {value: true,message:'campo obligatorio'}, 
                minLength:{value:3, message:'Minimo 3 caracteres'},
              })}
            ></input>
            <span className="text-danger text-small d-block mb-2">{errors.titulo?.message}</span>
            
            
            <input
              name="Descripcion"
              placeholder="Ingrese Apellido"
              className="form-control my-2"
              autocomplete="off"
              {...register("descripcion", {
                required: { value: true, message: 'campo obligatorio' },
                minLength: { value: 3, message: 'Minimo 3 caracteres' },
              })}
            />
            <span className="text-danger text-small d-block mb-2">{errors.descripcion?.message}</span>

            <select class="form-select" aria-label="Default select example"
              {...register("gender")}>
              <option selected>Seleccione una opcion</option>
              <option value="female">femenino</option>
              <option value="male">masculino</option>
              <option value="other">otro</option>
            </select>
            <div className="col text-center">
              <button className="btn boton mt-3">Agregar</button>
            </div>
            
          </form>
          <ul className="mt-3">
            {Entradas.map(item => 
              <li key={item.titulo}>{item.titulo} - {item.descripcion} - {item.gender}</li>
            )}
            
          </ul>
          
        </div>
      </div>
    </Fragment>
     
  )
}

export default EjemploUno