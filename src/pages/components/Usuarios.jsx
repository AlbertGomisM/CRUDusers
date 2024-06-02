import React from 'react';
import { useFetch } from '../../useFetch';
import "./Usuarios.css"
import { Link } from 'react-router-dom';

export const Usuarios = () => {
  const { data, error } = useFetch('http://localhost:4000/api/users');

  if (error) return <p>Error: {error.message}</p>;

  if (!data) {
    return <p id='loading'>Loading data...</p>;
  }

  const dataRoles = {"1": "Super Admin", "2":"Admin", "3" :"User" }


  return (
    <div id='usuarios'>
      <h2 id='title'>Usuarios</h2>
      <div id='table-container'>
        <table id='table'>
          <thead>
            <tr>
              <th className='rounded-left'>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Rol</th>
              <th className='rounded-right'>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => {
              const [firstName, ...lastName] = user.name.split(' ');
              for ( const i in dataRoles){
                if (i==user.role_id){
                    var role=dataRoles[i]
                }
            }
              return (
                <tr key={user.id}>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{user.email}</td>
                  <td>{role}</td>
                  <td>
                    <button id='btnDetalles'>
                      <Link to={`/user/${user.id}`}>Ver Detalle</Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
