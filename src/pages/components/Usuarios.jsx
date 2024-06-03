import React from 'react';
import { useFetch } from '../../useFetch';
import "./Usuarios.css"
import { Link } from 'react-router-dom';

export const Usuarios = () => {
  const { data, error } = useFetch('https://dev.justnetsystems.com/pruebareact/api/users');

  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.data || !data.data.data) {
    return <p id='loading'>Loading data...</p>;
  }

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
            {data.data.data.map(user => {
              const [firstName, ...lastName] = user.name.split(' ');
              return (
                <tr key={user.id}>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.role_name}</td>
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
