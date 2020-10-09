import React, { Component } from 'react'
import request from '../../request'
import qs from 'qs'
import { Form, Input, Icon, Button, message } from 'antd';//强行使用antd3.0版本
import { WrappedFormUtils } from 'antd/lib/form/Form'  //Stack Overflow或者自己找
import './style.css'
import { Redirect } from 'react-router-dom';

//声明form属性
interface FormFields {
  password: string
}

//告诉LoginForm组件接受外部传进来的参数有form
interface Props {
  form: WrappedFormUtils<FormFields>;
}

class LoginForm extends Component<Props>{//通过泛型Props传递给组件
  state = {
    isLogin: false
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => { //values  =>  WrappedFormUtils <T>  => T= FormFields =>FormFields.password
      if (!err) {
        // console.log('Received values of form: ', values.password);
        request.post('./api/login', qs.stringify({
          password: values.password
        }), {
            headers: {
              'Content-Type': "application/x-www-form-urlencoded"
            }
          }
        )
          .then((res) => {
            const data:responseResult.login = res.data
            if (data) {
              this.setState({
                isLogin: true
              })
            } else {
              message.error('登录失败')
            }
          })
      }
    });
  };

  render() {
    const { isLogin } = this.state
    const { getFieldDecorator } = this.props.form;
    return isLogin ? (<Redirect to="/" />) : (
      <div className="login-page">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password" placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
          </Form.Item>
        </Form></div>)
  }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);
export default WrappedLoginForm