function DragonDetails(props: any) {
  const { dataDragon } = props

  return (
    <div style={{ margin: 12 }}>
      <hr />

      {dataDragon &&
        <>
          <p>
            name:
            <strong> {dataDragon.name}</strong>
          </p>
          <p>
            type:
            <strong> {dataDragon.type}</strong>
          </p>
          <p>
            dry_mass_kg:
            <strong> {dataDragon.dry_mass_kg} kg</strong>
          </p>
          <p>
            dry_mass_lb:
            <strong> {dataDragon.dry_mass_lb} kg</strong>
          </p>
          <p>
            crew_capacity:
            <strong> {dataDragon.crew_capacity} {dataDragon.crew_capacity > 1 ? "persons" : 'person'}</strong>
          </p>
          <p>
            active:
            <strong> {dataDragon.active ? "Active" : "Deactivate"}</strong>
          </p>
          <br />
        </>
      }
    </div>
  );
}

export default DragonDetails;