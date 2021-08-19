import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_MISSION, GET_MISSIONS, GET_MISSONFIND } from '../../queries/MissionsQueries';
import MissionDetails from '../../components/missionDetails';
import { MissionNameRequest, MissionNameResponse, MissionRequest, MissionResponse, MissionsListResponse } from '../../queries/MissionsQueries/types';

const Mission: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const { loading, error, data } = useQuery<MissionsListResponse>(GET_MISSIONS)
  const [getMission, { loading: loadingMission, data: dataMission }] = useLazyQuery<MissionResponse, MissionRequest>(GET_MISSION);
  const [getMissionName, { loading: loadingMissionName, data: dataMissionName }] = useLazyQuery<MissionNameResponse, MissionNameRequest>(GET_MISSONFIND);
  console.log("getMission", dataMission);

  return (
    <div className="Container">
      <div className="App" style={{ display: 'flex' }}>
        {loading && <p>loading list...</p>}
        {error && <p>erro...</p>}
        {data &&
          <div>
            {data.missions.map(item => {
              return <div
                key={item.id}
                onClick={() => getMission({ variables: { missionId: item.id } })}
                style={{ backgroundColor: "#ededed", margin: 12, padding: 8, borderRadius: 8, width: 120 }}
              >
                <p style={{ fontSize: 12, fontStyle: 'italic' }}>{item.id}</p>
                <p style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</p>
              </div>
            })}
          </div>
        }

        {loadingMission && <div><p>loading data...</p></div>}
        {dataMission && <MissionDetails dataMission={dataMission.mission} />}
      </div>
      <div>
        <input
          onChange={(e) => { setSearchText(e.target.value) }}
          value={searchText}
          style={{ margin: 12 }}
        />
        <button onClick={() => getMissionName({ variables: { name: searchText } })}>
          Pesquisar
        </button>
      </div>
      {loadingMissionName && <div><p>loading data...</p></div>}
      <div>
        {dataMissionName?.missions.map(item => {
          return <div
            key={item.id}
            style={{ backgroundColor: "#ededed", margin: 12, padding: 8, borderRadius: 8 }}
          >
            <p style={{ fontSize: 18 }}><strong>Id: </strong>{item.id}</p>
            <p style={{ fontSize: 18 }}><strong>Name: </strong>{item.name}</p>
            <p style={{ fontSize: 18 }}><strong>Description: </strong>{item.description}</p>
            <p style={{ fontSize: 18 }}><strong>ManuFacturers: </strong>{item.manufacturers}</p>
          </div>
        })}
      </div>

    </div>
  )
}

export default Mission;
