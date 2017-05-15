var Hello=React.createClass({
    getInitialState:function(){
        return {opacity:1.0};
    },
    componentDidMount:function(){
        this.timer=setInterval(function(){
            var opacity=this.state.opacity;
            opacity-=.05;
            if(opacity<0.1){
                opacity=1.0;
            }
            this.setState({opacity:opacity});
        }.bind(this),100)
    },
    render:function(){
        return(
            <div style={{opacity:this.state.opacity}}>
                Hello {this.props.name}
            </div>
        )
    }
})
ReactDOM.render(
    <div>
        <h3>React生命周期：</h3>
        <Hello name="world" />
    </div>,
    document.getElementById('example15')
)
var IncreaButton=React.createClass({
    getInitialState:function(){
        return {data:0};
    },
    setNewNumber:function(){
        this.setState({data:this.state.data +1})
    },
    render:function(){
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREACE</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
})
var Content=React.createClass({
    componentWillMount:function(){
        console.log("Component Will Mount!")
    },
    componentDidMount:function(){
        console.log("Component Did Mount!")
    },
    componentWillReceiveProps:function(Props){
        console.log('component will receive props!')
    },
    shouldComponentUpdate:function(newProps,newState){
        return true;
    },
    componentWillUpdate:function(nextProps,nextState){
        console.log('Component Will Update!');
    },
    componentDidUpdate:function(prevProps,prevState){
        console.log('Component Did Update!')
    },
    render:function(){
        return(
            <div>
               <h4>{this.props.myNumber}</h4>
            </div>
        )
    }
})
ReactDOM.render(
    <div>
        <h3>React生命周期：</h3>
        <IncreaButton />
    </div>,
    document.getElementById('example16')
)