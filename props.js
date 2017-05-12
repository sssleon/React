//props和state混合使用
var WebSite=React.createClass({
    getInitialState:function(){
        return{
            name:"Props和State混合使用",
            site:"http://www.runoob.com"
        };
    },
    render:function(){
        return(
            <div>
                <Name name={this.state.name} />
                <Link site={this.state.site} />
            </div>
        );
    }
});

var Name=React.createClass({
    render:function(){
        return (
            <h1>{this.props.name}</h1>
        );
    }
});
var Link=React.createClass({
    render:function(){
        return(
            <a href={this.props.site}>
                {this.props.site}
            </a>
        )
    }
});
ReactDOM.render(
    <WebSite />,
    document.getElementById('example11')
)
//Props验证
var title="Props验证";
var MyTitle=React.createClass({
    propTypes:{
        title:React.PropTypes.string.isRequired,
    },
    render:function(){
        return (<h1>{this.props.title}</h1>)
    }
});
ReactDOM.render(
    <MyTitle title={title} />,
    document.getElementById('example12')
)