// 1、在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

const findNum = (target, arr) => {
	let rowCount = arr.length - 1;

	for(let i = rowCount, j = 0; i >= 0 && j < arr[i].length;){
		if(target === arr[i][j]){
			return true;
		}else if(target > arr[i][j]){
			j++;
			continue;
		}else if(target < arr[i][j]){
			i--;
			continue;
		}
	}
	return false;
}

//console.log(findNum(10, [[3,4,5,6],[5,6,7,8,9],[7,8,9,11]]));

// 2、请实现一个函数，将一个字符串中的空格替换成“%20”。
// 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

const replaceSpace = str => {
	let newStr = '';
	newStr = str.replace(/\s+?/g,'%20');
	return newStr;
}

//console.log(replaceSpace('wo ai ni'));

// 3、输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
const reConstructBinaryTree = (preTree, vinTree) => {
	if(preTree.length === 0 || vinTree.length === 0){
		return null;
	}else{
		let index = vinTree.indexOf(preTree[0]);
		let leftTree = vinTree.slice(0, index); // 中序左子数
		let rightTree = vinTree.slice(index+1); // 中序右子数

		return {
			val: preTree[0],
			left: reConstructBinaryTree(preTree.slice(1, index+1), leftTree),
			right: reConstructBinaryTree(preTree.slice(index+1), rightTree)
		}
	}
}

// console.log(reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]));

// 4、大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。n<=39
const Fibonacci = (n) => {
	let val = []
	if(n <= 0){
		return 0
	}else if(0 < n && n <= 2){
		return 1
	}else{
		val[1] = 1 // n为2
		val[2] = 2 // n为3
		for(let i = 3; i < n; i++){
			val[i] = val[i-1] + val[i-2]
		}
		return val[n-1]
	}
}
//console.log(Fibonacci(10))
// 5、一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
const jumpFloor = (num) => {
	if(num === 1){
		return 1
	}
	if(num === 2){
		return 2
	}

	let m = 1
	let n = 2
	while(num > 2){
		let temp = n
		n = n + m
		m = temp
		num--
	}
	return n
}

console.log(jumpFloor(10))