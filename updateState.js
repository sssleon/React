var myStyle={
	fontSize:30,
	color:"#FF0000"
};
var newStyle={
	fontSize:30,
	color:"#FFFF00"
};
var Counter=React.createClass({
    getInitialState:function(){
        return {clickCount:0,style:myStyle};
    },
    handleClick:function(){
        this.setState({clickCount:this.state.clickCount+1},function(state){
            console.log(this.state);
        });
    },
    render:function(){
        return (<h3 class={this.props.name} onClick={this.handleClick}>点我！点击次数为：{this.state.clickCount}</h3>);
    }
})
ReactDOM.render(
    <div>
        <h3>更新状态setState：</h3>
        <Counter name="myStyle" />
    </div>,
    document.getElementById('example13')
);
var CounterReplace=React.createClass({    
    getInitialState:function(){
        return {clickCount:0,isRed:false};
    },
    handleClick:function(){
        this.replaceState({clickCount:this.state.clickCount+1},function(state){
           console.log(this.state);
        })
    },
    render:function(){
        return (<h3 onClick={this.handleClick}>点我！点击次数为：{this.state.clickCount}</h3>);
    }
})
ReactDOM.render(
    <div>
        <h3>更新状态replaceState：</h3>
        <CounterReplace />
    </div>,
    document.getElementById('example14')
);
