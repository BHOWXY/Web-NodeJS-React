import React, { Component } from 'react'
import './Foto.css'
export default class Foto extends Component {
	
	render() {
		return (
			<div className="foto">
				<img alt='pics' src={this.props.img_src} />
			</div>
		)
	}
}