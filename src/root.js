/**
 * Created by zkw on 2017/5/15.
 */
import React from 'react';
import { hashHistory, IndexRoute, Router, Route, Link } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
import '../index.css';
import Cookie from './utils/Cookie';
import RegisterRecord from './containers/RegisterRecord';
import LoginRecord from './containers/LoginRecord';
import PersonInfo from './containers/PersonInfo';
import SignManage from './containers/SignManage';
import SendMsg from './containers/SendMsg';
import Recharge from './containers/Recharge';
import BuyMsgPackage from './containers/BuyMsgPackage';
import LoginPage from './containers/LoginPage';

const { Header, Sider, Content } = Layout;

class root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '1',
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  quit = () => {
    console.log('ss');
    window.location.hash = '/';
  }

  render() {
    return (
      <Layout>
        <Header>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span style={{color: '#FFF', fontSize: 17}}>JangGwa管理系统</span>
            <div className="quit-view" onClick={this.quit}>
              <Icon type="poweroff" style={{color: '#fff'}} />
              <span style={{color: '#fff', marginLeft: 8, fontSize: 13}}>退出</span>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider>
            <Menu
              theme="dark"
              style={{ width: 200 }}
              onClick={this.handleClick}
              selectedKeys={this.state.current}
              mode="inline"
            >
              <Menu.Item key="1"><Link to="/register"><Icon type="user" /><span>用户注册</span></Link></Menu.Item>
              <Menu.Item key="2"><Link to="/sign"><Icon type="tag-o" /><span>签名管理</span></Link></Menu.Item>
              <Menu.Item key="3"><Link to="/login"><Icon type="login" /><span>登录记录</span></Link></Menu.Item>
              <Menu.Item key="4"><Link to="/send"><Icon type="message" /><span>发送短信</span></Link></Menu.Item>
              <Menu.Item key="5"><Link to="/recharge"><Icon type="pay-circle-o" /><span>充值</span></Link></Menu.Item>
              <Menu.Item key="6"><Link to="/buy"><Icon type="red-envelope" /><span>短信包购买</span></Link></Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Router history={hashHistory}>
              <IndexRoute component={RegisterRecord} />
              <Route path="/register" component={RegisterRecord} />
              <Route path="/sign" component={SignManage} />
              <Route path="/login" component={LoginRecord} />
              <Route path="/send" component={SendMsg} />
              <Route path="/recharge" component={Recharge} />
              <Route path="/buy" component={BuyMsgPackage} />
              <Route path="/info" component={PersonInfo} />
            </Router>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default root;

