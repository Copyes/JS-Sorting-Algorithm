/**
 * 冒泡排序
 * @return {[type]} [description]
 */
const bubbleSort = (arr) => {
	let len = arr.length;

	for(let i = 0; i < len - 1; i++){
		for(let j = 0; j < len - 1; j++){
			if(arr[j] > arr[j + 1]){  // 相邻的两个元素比较
				let temp = arr[j + 1];  // 元素互换
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}

	return arr;
}

console.log(bubbleSort([2,59,32,24,78,12,4,26,33]));