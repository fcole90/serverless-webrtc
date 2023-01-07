import CreateJoinDialog from "./CreateJoinDialog/CreateJoinDialog"

const App = () => {
  return (
    <div style={{
      padding: '2rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '1200px',
      
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
    }}>
      <h1>
        Serverless WebRTC React
      </h1>
      <CreateJoinDialog />
    </div>
    
  )
}

export default App
