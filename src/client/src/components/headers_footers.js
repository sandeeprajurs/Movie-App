import React, { Component } from 'react';

export default class HeadersFooters extends Component{
	render(){
		return (
			<div>
				<li className="topnav">
				  <ul><a href="#home"><img src='/static_content/images/website-logo.jpg'></img></a></ul>
				  <ul><div><input type="text" /></div></ul>
				  <ul ><a>Browse Movies</a></ul>
				  <ul><a>Popular Movies</a></ul>
				</li>
			</div>

			)
	}
}