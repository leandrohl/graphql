import React, { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';

import { GET_USERS, GET_USERS_BY_NAME } from '../../queries/UserQueries'
import { UserListRequest, UserListResponse } from '../../queries/UserQueries/types';

const Users: React.FC = () => {
  const [searchName, setSearchName] = useState('');

  // const { loading, data } = useQuery<UserListResponse>(GET_USERS)
  const [ getUser, { data: dataUser, loading }] = useLazyQuery<UserListResponse, UserListRequest>(GET_USERS_BY_NAME)

  if (loading) return <div>Carregando...</div>

  console.log(dataUser)

  return (
    <div>
      <h1>Users</h1>
      <input 
      placeholder="Busque um usuario: " 
      value={searchName}  
      onChange = {(e) => setSearchName(e.target.value)}
      />
      <button onClick={() => getUser({ variables: { nameUser: searchName } })}>Procurar</button>
      {
        dataUser &&
        <ul>
          {
            dataUser.users.map(user => {
              return (
                <li key={user.id}>{user.id} - {user.name} - {user.rocket}</li>
              )
            })
          }
        </ul>
      }
    </div>
  );
}

export default Users;