var HelloMessage=React.createClass({
    getInitialState:function(){
        return {value:'Hello Runoob!'};
    },
    handleChange:function(event){
        this.setState({value:event.target.value});
    },
    render:function(){
        var value=this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <h4>{value}</h4>
            </div>
        );
    }
})
ReactDOM.render(
    <div>
        <h3>onChange监听事件：</h3>
        <HelloMessage />
    </div>,
    document.getElementById('example17')
)

var Content=React.createClass({
    render:function(){
        return (
            <div>
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
    }
})
var NewHello=React.createClass({
    getInitialState:function(){
        return {value:'Hello Runoob'};
    },
    handleChange:function(event){
        this.setState({value:event.target.value});
    },
    render:function(){
        var value = this.state.value;
        return (
            <div>
                <Content myDataProp={value} updateStateProp={this.handleChange} />
            </div>
        );
    }
});
ReactDOM.render(
    <div>
        <h4>onChange 方法将state更新的值传递到子组件：</h4>
        <NewHello />
    </div>,
    document.getElementById('example18')
);

var HelloClick=React.createClass({
    getInitialState:function(){
        return {value:'Hello Runoob!'};
    },
    handleChange:function(){
        this.setState({value:'菜鸟教程'});
    },
    render:function(){
        var value=this.state.value;
        return (
            <div>
                <button onClick={this.handleChange}>点我</button>
                <h4>{value}</h4>
            </div>
        );
    }
})
ReactDOM.render(
    <div>
        <h4>点击按钮触发事件：</h4>
        <HelloClick />
    </div>,
    document.getElementById('example19')
)
var ContentClick=React.createClass({
    render:function(){
        return (
            <div>
                <button onClick={this.props.updateStateProp}>点我</button>
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
    }
})
var NewHelloClick=React.createClass({
    getInitialState:function(){
        return {value:'Hello Runob'};
    },
    handleChange:function(event){
        this.setState({value:'菜鸟教程'})
    },
    render:function(){
        var value=this.state.value;
        return (
            <div>
                <ContentClick myDataProp={value} updateStateProp={this.handleChange}></ContentClick>
            </div>
        )
    }
})
ReactDOM.render(
    <div>
        <h4>点击按钮传递state到子组件：</h4>
        <NewHelloClick />
    </div>,
    document.getElementById('example20')
)