import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {loginrequest} from "./actions";
import {connect} from 'react-redux';

import SimpleForm from './testFormRedux'
// import showResults from './showResults'

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:'',
			errorText: '',
			success: false,
		};
		this.handSubmit = this.handSubmit.bind(this);
	}
	handSubmit(e){
		e.preventDefault();
        const { form } = this.props;
        this.props.loginrequest(form.getFieldValue('email'), form.getFieldValue('password'))
		console.log(this.props);
	}
    onSubmit(e) {
		e.preventDefault();
		console.log("cctn");
	}
	showResults = (e) => {
		e.preventDefault;
		this.props.loginrequest(e.email, e.password);
	}
	render() {
		return (
            <SimpleForm onSubmit={this.showResults}/>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		email: state.email,
		password: state.password
	}
}
export default connect(mapStateToProps, {loginrequest})(Login);