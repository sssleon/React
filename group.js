//React组件
var HelloMessage=React.createClass({
	render:function(){
		return <h1>React组件!</h1>
	}
});
ReactDOM.render(
	<HelloMessage />,
	document.getElementById('example6')
);
//组价属性
var HelloBob=React.createClass({
    getDefaultProps:function(){
        return{
            name:'RunBob'
        };
    },
	render:function(){
		return <h1>hello {this.props.name}</h1>
	}
});
ReactDOM.render(
    <HelloBob />,
    document.getElementById('example7')
);
ReactDOM.render(
	<HelloBob name="Bob"/>,
	document.getElementById('example8') 
);
//复合组件
var WebSite=React.createClass({
	render:function(){
		return (
			<div>
				<Name name={this.props.name} />
				<Link site={this.props.site} /><br />
				<a href={this.props.site}>{this.props.name}</a>
			</div>	
		)
	}
});
var Name=React.createClass({
	render:function(){
		return <h3>{this.props.name}</h3>
	}
});
var Link=React.createClass({
	render:function(){
		return (<a href={this.props.site}>{this.props.site}</a>)
	}
});
ReactDOM.render(
	<WebSite name="菜鸟教程" site="http://www.runoob.com" />,
	document.getElementById('example9')
)
//React状态
var LinkButton=React.createClass({
	getInitialState:function(){
		return {liked:false}
	},
	handleClick:function(event){
		this.setState({liked:!this.state.liked});
	},
	render:function(){
		var text=this.state.liked?'喜欢':'不喜欢';
		return (
			<p onClick={this.handleClick}>
				你<b>{text}</b>我。点我切状态。
			</p>
		)
	}
});
ReactDOM.render(
	<LinkButton />,
	document.getElementById('example10')
)