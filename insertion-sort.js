/**
 * 插入排序
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
const insertionSort = (arr) => {
	let len = arr.length;
	let preIndex, current;

	for(let i = 1; i < len; i++){

		preIndex = i - 1;
		current = arr[i];

		while(preIndex >= 0 && arr[preIndex] > current){
			arr[preIndex + 1] = arr[preIndex];
			preIndex--;
		}

		arr[preIndex + 1] = current;
	}
	return arr;
}

console.log(insertionSort([2,59,32,24,2,78,12,4,26,33]));