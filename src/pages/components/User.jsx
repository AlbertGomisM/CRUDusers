import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../useFetch'
import "./User.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const User = () => {

    const { id } = useParams()



    const { data, error, setData } = useFetch(`https://dev.justnetsystems.com/pruebareact/api/users/${id}`)

    if (!data || !data.data || !data.data.data) {
        return <p id='loading'>Loading data...</p>;

    }

    const user = data.data.data

    const dataRoles = { "1": "Super Admin", "2": "Admin", "3": "User" }

    const [firstName, ...lastName] = user.name.split(' ');

    for (const i in dataRoles) {
        if (i == user.role_id) {
            var role = dataRoles[i]
        }
    }


    const handleClearData = () => {
        setData(null);
    };

    

    return (
        <div id='general-user-div'>
            <button id='btn-back'>
                <Link to="/users">
                    Back
                </Link>
            </button>
            <div id='user-detalles'>
                <h2>Detalles de usuario</h2>
                <form action="">
                    <label>Nombre</label>
                    <input type="text" value={firstName} />
                    <label>Apellido</label>
                    <input type="text" defaultValue={lastName} />
                    <label>Role</label>
                    <input type="text" value={role} />
                    <button id='btn-submit'>
                        Save</button>
                </form>
            </div>
            <div id='buttons-travel'>
                {5 < id && (
                    <button onClick={handleClearData} id='btn-anterior'>
                        <Link to={`/user/${user.id - 1}`}>Ver usuario anterior</Link>
                    </button>
                )}
                {15 > id && (
                    <button onClick={handleClearData} id='btn-siguiente'>
                        <Link to={`/user/${user.id + 1}`}>Ver usuario siguiente</Link>
                    </button>
                )}
            </div>
        </div>
    )
}
