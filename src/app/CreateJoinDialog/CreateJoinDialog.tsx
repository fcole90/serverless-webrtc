import Button from "../../components/Button/Button"


const CreateJoinDialog = () => (
  <div style={{ width: '50%', border: 'solid 1px grey', borderRadius: '15px', padding: '2rem' }}>
    <h2>
      Create or join a room?
    </h2>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '1rem' }}>
      <Button>
        Join
      </Button>
      <Button>
        Create
      </Button>
    </div>
  </div>
)

export default CreateJoinDialog