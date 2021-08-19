function MissionDetails(props: any) {
  const { dataMission } = props

  return (
    <div style={{ margin: 12 }}>

      {dataMission &&
        <>
          <p>
            description:
            <strong> {dataMission.description}</strong>
          </p>
          <p>
            twitter:
            <strong> {dataMission.twitter}</strong>
          </p>
          <p>
            manufacturers:
            <strong> {dataMission.manufacturers}</strong>
          </p>

          <br />
        </>
      }
    </div>
  );
}

export default MissionDetails;