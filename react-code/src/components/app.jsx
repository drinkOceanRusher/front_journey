import React, {Component} from 'react'

/**
 * 定义组件2种方式 简单：函数；复杂：类
 * Component是React的属性，所以 import React, {Component} from 'react' ——》直接用Componet
 * import Reactfrom 'react'  extends React.Component
 */

import log from '../logo.svg'
class App extends Component{
    render() {
        return(
            <div>
                <img src={log} alt="log"/>
            </div>
        )
    }
}

export default App