import { makeAutoObservable } from 'mobx'

class ToolStore {
	/**
	 * @type {Tooll | null}
	 */
	tool = null

	constructor () {
		makeAutoObservable(this)
	}

	setTool (tool) {
		this.tool = tool
	}

  setFillColor (color) {
    this.tool.fillColor = color
  }

  setStrokeColor(color) {
    this.tool.strokeColor = color
  }

	setLineWidth (width) {
		this.tool.lineWidth = width
	}
}

const toolStore = new ToolStore
export default toolStore