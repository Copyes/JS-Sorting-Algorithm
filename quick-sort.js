/**
 * 快速排序
 * 快速排序的最坏运行情况是 O(n²)，比如说顺序数列的快排。
 * 但它的平摊期望时间是 O(nlogn)，且 O(nlogn) 记号中隐含的常数因子很小，比复杂度稳定等于 O(nlogn) 的归并排序要小很多。
 * 所以，对绝大多数顺序性较弱的随机数列而言，快速排序总是优于归并排序。
 * @param  {[type]} arr   [description]
 * @param  {[type]} left  [description]
 * @param  {[type]} right [description]
 * @return {[type]}       [description]
 */
function quickSort(array) {
    function sort(prev, numsize) {
        var nonius = prev;
        var j = numsize - 1;
        var flag = array[prev];
        if ((numsize - prev) > 1) {
            while (nonius < j) {
                for (; nonius < j; j--) {
                    if (array[j] < flag) {
                        array[nonius++] = array[j];　 //a[i] = a[j]; i += 1;
                        break;
                    };
                }
                for (; nonius < j; nonius++) {
                    if (array[nonius] > flag) {
                        array[j--] = array[nonius];
                        break;
                    }
                }
            }
            array[nonius] = flag;
            sort(0, nonius);
            sort(nonius + 1, numsize);
        }
    }
    sort(0, array.length);
    return array;
}


console.log(quickSort([2, 59, 32, 24, 2, 78, 12, 4, 26, 33]));
