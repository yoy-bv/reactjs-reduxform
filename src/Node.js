import	React, {Component} from 'react';
import { Col, Button } from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {addclickrequest} from './actions'

class Node extends Component {
	render() {
		return (
			<div>
				<Col md={{span: 4}} xs={{span: 24}}>
                    <p>{this.key}</p>
                    <p>{this.props.cc}</p>
                    <p>{this.props.node}</p>
					<Button>Delete</Button>
				</Col>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
    return {
        arr: state.arr,
        name: state.name
    }
}
export default connect(mapStateToProps, {addclickrequest})(Node);