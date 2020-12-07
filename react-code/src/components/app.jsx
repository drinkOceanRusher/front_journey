import React, {Component} from 'react'
import {Button,message} from "antd"
import 'antd/dist/antd.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from '../pages/login/login'
import Admin from "../pages/admin/admin";
/**
 * 定义组件2种方式 简单：函数；复杂：类
 * Component是React的属性，所以 import React, {Component} from 'react' ——》直接用Componet
 * import Reactfrom 'react'  extends React.Component
 */
class App extends Component{
    /**
     *
     * 定义函数的方式有区别 为什么不用function了
     * TODO
     */
     handleClick() {
        message.success("点击了")
    };
    //handleClick = () => message.success("点击了")
    render() {
        return(

            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={Admin}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App