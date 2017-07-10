/**
 * 希尔排序
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
const shellSort = arr => {
	let len = arr.length,
		temp,
		gap = 1;

	gap = Math.floor(len / 2);
	for(gap; gap > 0; gap = Math.floor(gap / 2)){
		for(let i = gap; i < len; i++){
			temp = arr[i];
			for(var j = i - gap; j >=0 && arr[j] > temp; j -= gap){
				arr[j + gap] = arr[j];
				console.log(i,'-',j,'-',gap);
			}
			arr[j+gap] = temp;
		}
	}
	return arr
}

console.log(shellSort([2,59,32,24,78,12,4,26,33]));