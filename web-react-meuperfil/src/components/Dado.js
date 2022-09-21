import React, { Component } from 'react'
import './Dado.css'
export default class Dado extends Component {

	renderDados() {
		if (this.props.tipo === "link")
			return (
				<div>
					<p><span className="chave">{this.props.chave}:</span> <a href={this.props.valor}>{this.props.valor}</a></p>
				</div>
			)

		else
			return (
				<div>
					<p><span className="chave">{this.props.chave}:</span> {this.props.valor}</p>
				</div>
			)
	}

	render() {
		return this.renderDados()
	}
}