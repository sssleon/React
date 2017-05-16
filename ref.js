var MyComponent=React.createClass({
    getInitialState:function(){
        return {value:'Hello Runob'};
    },
    handleClick:function(){
        this.setState({value:this.refs.myInput.value})
        this.refs.myInput.focus();
    },
    render:function(){
        return (
            <div>
                <input type="text"  ref="myInput" value={this.state.value} onChange={this.handleClick} />
                <input type="button" onClick={this.handleClick} value="点我获取焦点" />
                <h4>{this.state.value}</h4>
            </div>
        )
    }
})
ReactDOM.render(
    <div>
        <h4>ref用法：</h4>
        <MyComponent />
    </div>,
    document.getElementById('example21')
)
