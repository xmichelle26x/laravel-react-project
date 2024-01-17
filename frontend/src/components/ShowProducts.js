import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = async () => {
        try {
            const response = await axios.get(`${endpoint}/products`)
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }


    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`)
        getProducts()
    }

    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success'>Crear</Link>
                <table className="table">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Cantidad</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td> {product.nombre} </td>
                                <td> {product.descripcion} </td>
                                <td> {product.precio} </td>
                                <td> {product.cantidad} </td>
                                <td>
                                    <Link to={`/update/${product.id}`} className="btn btn-warning">
                                        Edit
                                    </Link>
                                    <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default ShowProducts
