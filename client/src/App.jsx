import { Box } from "@mui/material"
import Toolbar from "./components/Toolbar"
import { Settingsbar } from "./components/Settingsbar/ui"
import { Canvas } from "./components/Canvas"
import { Route, Routes, useNavigate} from 'react-router'
import { useEffect } from "react"

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const uid = crypto.randomUUID()
    navigate(`/${uid}`)
  }, [])

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Routes>
        <Route 
          path=":id"
          element={
            <>
              <Toolbar />
              <Settingsbar />
              <Canvas />
            </>
          }
        />
      </Routes>
    </Box>
  )
}

export default App
