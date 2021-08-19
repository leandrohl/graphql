import React, { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';

import { GET_USERS_ORDER_BY_NAME_ASC, GET_USER_BY_NAME } from '../../queries/UserQueries'
import {  UserListResponse, UserNameRequest } from '../../queries/UserQueries/types';

const Users: React.FC = () => {
  const [search, setSearch] = useState('');

  const { loading, data } = useQuery<UserListResponse>(GET_USERS_ORDER_BY_NAME_ASC)
  const [ getUsers, { data: dataUser }] = useLazyQuery<UserListResponse, UserNameRequest>(GET_USER_BY_NAME)

  if (loading) return <div>Carregando...</div>

  
  return (
    <div>
      <h1>Users</h1>

      <div>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={() => getUsers({variables: {nameUser: search}})}>Pesquisar</button>
        {
          dataUser && dataUser.users.length > 0
          &&
          <div>
            <h1>Usuarios encontrados: </h1>
            {
              dataUser.users.map((user) => (
                <div style={{display: 'flex', flexDirection:'column', marginTop: 12}}>
                  <strong>Id: {user.id}</strong>
                  <strong>Nome: {user.name}</strong>
                </div>
              ))
            }
          </div>
        }
      </div>
      <div>
        <h1>Todos os usuarios encontrados</h1>
        {
          data &&
          <ul>
            {
              data.users.map((user) => {
                return <li key={user.id}>Id: {user.id} - Name: {user.name} </li>
              })
            }
          </ul>
        }
      </div>
      
    </div>
  );
}

export default Users;