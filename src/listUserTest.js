import React, {Component} from 'react';
import './App.css';
import Node from './Node.js';
import {Button, Col, Form, Input} from 'antd';
import 'antd/dist/antd.css';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {addclickrequest} from './actions'
import SimpleForm from './testFormRedux'

class ListUser extends Component {
    constructor(props) {
        super(props);
        this.handLogout = this.handLogout.bind(this);

        this.state = {
            name: ''
        }
    }

    handLogout() {
        localStorage.setItem('token', '');
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { form } = this.props;

        console.log(form.getFieldValue('name'))
        this.props.addclickrequest(form.getFieldValue('name'))
    }

    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const { getFieldDecorator } = this.props.form;
        // if (localStorage.getItem('token')) {
            return (
                <div>
                    <SimpleForm />
                    <hr></hr>
                    <Col span={24}>
                        <h1>you are logged <Button type="primary" htmlType="submit"
                                                   onClick={this.handLogout}>Logout</Button></h1>
                    </Col>
                    <Col span={24}>
                        {/*<input type="text" name="name" value={this.state.name}*/}
                               {/*onChange={(e) => this.setState({name: e.target.value})}/>*/}
                        <Form layout="inline" onSubmit={this.onSubmit}>
                            <Form.Item {...formItemLayout} label="name">
                                {getFieldDecorator('name',) (<Input />)}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Add</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col md={{span: 24}} xs={{span: 24}}>
                        {this.props.arr.map((e, i) => <Node key={i} node={e}/>)}
                    </Col>
                </div>
            )
        // }
        // return (
        //     <Redirect to="/login"/>
        // )
    }
}


const mapStateToProps = (state) => {
    return {
        arr: state.arr,
        name: state.name
    }
}

const WrappedDemo = Form.create()(ListUser);

export default connect(mapStateToProps, {addclickrequest})(WrappedDemo);