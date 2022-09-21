import React, { Component } from 'react'
import './Secao.css'
export default class Secao extends Component {

	render() {
		return (
			<div className="secao">
				<h3>{this.props.titulo}</h3>
				{this.props.children}
			</div>
		)
	}
}