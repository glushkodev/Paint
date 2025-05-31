import { Box, Modal } from "@mui/material"
import { useEffect, useRef } from "react"
import canvasState from "../../../store/canvasState"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router"
import { useState } from "react"

const Canvas = observer(() => {
	const [modal, setModal] = useState(true)
	const [userName, setUserName] = useState('')
	const canvasRef  = useRef(null)
	const id = useParams()

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
	}, [])

	const mouseDownHandler = () => {
		canvasState.setUndo(canvasState.canvas.toDataURL())
	}

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				flexGrow: '1'
			}}
		>
			<Modal open={modal}>

			</Modal>
			<canvas width={600} height={400} style={{ border: '1px solid #000' }} ref={canvasRef} onMouseDown={mouseDownHandler}/>
		</Box>
	)
})

export { Canvas }