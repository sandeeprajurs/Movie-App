import React, {Component} from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';

export default class PageDivision extends Component{
   
    constructor(props){
        super(props);
        this.state = ({ 'page_data': '' })
    }

    componentWillMount(){
		this.getDataFromApi();
	}

    getDataFromApi(){
		return fetch(`${this.props.url}&page=1`).
                then(Response=> Response.json()).
                then(data => data.total_pages).
                then(got_all_data => this.setState({ 'page_data': got_all_data}))
    }

    onClick(pageNumber){
        this.props.changePageNumber(pageNumber);
    }

    getPageNumbers(){
        if(this.state.page_data){
            var settings = {
                slidesToShow: 20,
                slidesToScroll: 20,
                arrows: true
            };
            let page_list = []
            for(let i=1; i<=this.state.page_data; i++){
                page_list.push(<div className="button-style" onClick={ ()=> this.onClick(i) }>{i}</div>)
            }

            return <div className="movie-buttons-slider"><Slider {...settings}>{page_list.map((element, index) => <div key={index}>{element}</div> )}</Slider></div>
        }
    }

    render(){
        return  <div>{this.getPageNumbers()}</div>
    }
}

 PageDivision.propsType = {
    url: PropTypes.string,
    changePageNumber: PropTypes.number,
 }