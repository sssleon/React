var Counter=React.createClass({
    getInitialState:function(){
        return {clickCount:0};
    },
    handleClick:function(){
        this.setState(function(state){
             console.log(state.clickCount);
            return {clickCount:state.clickCount+1};
        })
    },
    render:function(){
        return (<h3 onClick={this.handleClick}>点我！点击次数为：{this.state.clickCount}</h3>);
    }
})
ReactDOM.render(
    <div>
        <h3>更新状态setState：</h3>
        <Counter />
    </div>,
    document.getElementById('example13')
);
