import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/products'

const CreateProducts = () => {

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState(0)
    const [cantidad, setCantidad] = useState('')

    const navigate = useNavigate()

    const add = async (event) => {
        event.preventDefault()
        await axios.post(endpoint, { nombre: nombre, descripcion: descripcion, precio: precio, cantidad: cantidad })
        navigate('/')
    }

    return (
        <div>
            <h3>Agregar producto</h3>
            <form onSubmit={add}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                        type='text' className='form-control' />

                    <label className='form-label'>Descripcion</label>
                    <input value={descripcion}
                        onChange={(event) => setDescripcion(event.target.value)}
                        type='text' className='form-control' />

                    <label className='form-label'>Precio</label>
                    <input value={precio}
                        onChange={(event) => setPrecio(event.target.value)}
                        type='number' className='form-control' />

                    <label className='form-label'>Cantidad</label>
                    <input value={cantidad}
                        onChange={(event) => setCantidad(event.target.value)}
                        type='text' className='form-control' />

                </div>

                <button type='submit' className='btn btn-primary'> Agregar </button>
            </form>
        </div>
    )
}

export default CreateProducts
