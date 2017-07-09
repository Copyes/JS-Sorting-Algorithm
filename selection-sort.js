/**
 * 选择排序
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
const selectionSort = (arr) => {
	let len = arr.length;
	let minIndex, temp;

	for(let i = 0; i < len - 1; i++){
		minIndex = i;
		for(let j = i + 1; j < len; j++){
			if(arr[j] < arr[minIndex]){  // 寻找最小的数
				minIndex = j;			 // 将最小的数的索引保存
			}	
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}

console.log(selectionSort([2,59,32,24,2,78,12,4,26,33]));