/** sort升序*/
function arryaSortAsc(value1,value2){
	if(value1>value2){
		return 1;	
	}else if(value1<value2){
		return -1;
	}else{
		return 0;
	}
}
/**sort降序*/
function arryaSortDesc(value1,value2){
	//arguments对象， 可以访问参数的实际参数，必须在函数内部使用
	if(arguments.callee.length == arguments.length){
		if(value1>value2){
			return -1;	
		}else if(value1<value2){
			return 1;
		}else{
			return 0;
		}
	}else{
		return '参数不正确！';
	}
}
/** 去掉数组的重复项  */
function removeRepeat(arr){
	var obj = {}; 
	//把数组转成对象
	for(var i=0;i<arr.length;i++){
		obj[arr[i]]=true;
	}
	var arrs = [];
	//在把对象转为数组返回
	for(var arrt in obj){
		if(obj.hasOwnProperty(arrt)){
			arrs.push(arrt);
		}
	}
	return arrs;
}

/** Map集合的操作 定义一个Map */
function Map(){
	var obj = {}; //用来存放键值对
	this.put = function(key , value){
		obj[key] = value; //把键值对绑定到Obj对象
	}
	this.size = function(){
		var count=0;
		for(var attr in obj){
			count++;
		}
		return count;
	}
	this.get = function(key){
		if(obj[key] || obj[key] === 0 || obj[key] === false	){
			return obj[key];
		}else{
			null
		}
	}
	this.remove = function(key){
		if(obj[key] || obj[key] === 0 || obj[key] === false	){
			delete obj[key];
		}
	}
	this.eachMap = function(fn){ //遍历map
		for(var attr in obj){
			fn(attr,obj[attr]);
		}
	}
}

/**
 * 输入一个数字 获取从1到输入数字的积
 * arguments.callee  主要用于递归操作
 * arguments对象， 可以访问参数的实际参数，必须在函数内部使用
 * if(arguments.callee.length == arguments.length){} 判断参数是否完整
 * @param {} num
 */
function fact(num){
	if(num <= 1) return 1;
	else return num*arguments.callee(num-1);
}

/**
 * call aplly 简单方法绑定一些函数，用于传递参数调用
 * 	真正的作用是可以扩充作用域
 */
function sum(x , y){
	return x+y;
}
function call1(num1 , num2){
	return sum.call(this,num1,num2);
}
function aplly1(num1 , num2){
	return sum.apply(this,[num1,num2])
}
/**
 * call aplly 简单方法绑定一些函数，用于传递参数调用
 * 	真正的作用是可以扩充作用域
 */
window.color=red;
var obj = {color:'blue'};

function  showColor(){
	alert(this.color);
}
/**
 * jQuery简析JSON
 * var json='[{"PointCode":"TZ_HD_1106_SW_DAY_AVG","PointValue":1.297291},{"PointCode":"TZ_HD_6737_SW_DAY_AVG","PointValue":1.225087}]';
 */
function parsetJson(json) {
	json = eval(json);
	$.each(json, function(i, n){
		$("#div").before( "Key: " + i + ", value: " + n.PointCode +":"+ n.PointValue +"<br/>" );
	});
}





