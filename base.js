ReactDOM.render(
		<div>
		<h3>简单输出：</h3>
        <h3>Hello, world!</h3>
		</div>,
        document.getElementById('example1')
      );
//计算
ReactDOM.render(
	<div>
		<h3>计算1+1：</h3>
		<h3>{1+1}</h3>
	</div>,
	document.getElementById('example2')
	);
//三原方程
var i=1;
ReactDOM.render(
	<div>
		<h3>三元表达式：</h3>
		<h3>{i==1?"True":"False"}</h3>
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
		<h3>样式演示：</h3>
		<h3 style={myStyle}>样式演示</h3>
	</div>,
	document.getElementById('example4')
);
//数组
var arr=[
	<h4>测试数组1</h4>,
	<h4>测试数组2</h4>
];
ReactDOM.render(
	<div>
	<h3>输出数组：</h3>
	{arr}
	</div>,
	document.getElementById('example5')
);


