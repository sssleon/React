ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example1')
      );
//计算
ReactDOM.render(
	<div>
		<h1>{1+1}</h1>
	</div>,
	document.getElementById('example2')
	);
//三原方程
var i=1;
ReactDOM.render(
	<div>
		<h1>{i==1?"True":"False"}</h1>
	</div>,
	document.getElementById('example3')
	);
//样式
var myStyle={
	fontSize:30,
	color:"#FF0000"
};
ReactDOM.render(
	<div>
		<h1 style={myStyle}>样式演示</h1>
	</div>,
	document.getElementById('example4')
);
//数组
var arr=[
	<h4>测试数组1</h4>,
	<h4>测试数组2</h4>
];
ReactDOM.render(
	<div>{arr}</div>,
	document.getElementById('example5')
);


