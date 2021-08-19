import { useQuery, useLazyQuery } from "@apollo/client";
import DragonDetails from '../../components/dragonDetails'
import { GET_DRAGONS, GET_DRAGON } from '../../queries/DragonsQueries';
import { DragonsListResponse, DragonResponse, DragonRequest } from '../../queries/DragonsQueries/types';


const Dragon: React.FC = () => {
  const { loading, error, data } = useQuery<DragonsListResponse>(GET_DRAGONS);
  const [getDragon, { loading: loadingDragon, data: dataDragon }] = useLazyQuery<DragonResponse, DragonRequest>(GET_DRAGON);
  
  return (
    <div className="Container">
      <div className="App">
        {loading && <p>loading list...</p>}
        {error && <p>erro...</p>}
        {data &&
          <div>
            {data.dragons.map(item => {
              return <div
                key={item.id}
                onClick={() => getDragon({ variables: { dragonId: item.id } })}
                style={{ backgroundColor: "#ededed", margin: 12, padding: 8, borderRadius: 8 }}
              >
                <p style={{ fontSize: 12, fontStyle: 'italic' }}>{item.id}</p>
                <p style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</p>
              </div>
            })}
          </div>
        }

        {loadingDragon && <p>loading data...</p>}
        {dataDragon && <DragonDetails dataDragon={dataDragon.dragon} />}
      </div>
    </div>
  )
}

export default Dragon;