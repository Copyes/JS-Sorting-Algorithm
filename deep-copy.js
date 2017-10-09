var obj1 = {
    'name': 'fan',
    'age': '18',
    'language': [1,[2,3],[4,5]]
}

var obj2 = obj1

var obj3 = deepCopy(obj1)

function deepCopy(src){
    var dist = src.constructor === Array ? [] : {}
    dist.constructor = src.constructor

    if(typeof src !== 'object'){
        return 
    }else if(JSON){
        dist = JSON.parse(JSON.stringify(src))
    } else {
        for(var item in src) {
            if(src[item].constructor === RegExp || src[item].constructor === Date){
                dist[item] = src[item]
            } else if(typeof src[item] === 'object') {
                dist[item] = deepCopy(src[item]) // 递归拷贝
            } else {
                dist[item] = src[item]
            }
        }
    }

    return dist
}

obj2.name = 'chao'
obj3.age = '20'

obj2.language[1] = ['two','three']
obj3.language[2] = ['four', 'five']

console.log(obj1)
console.log(obj2)
console.log(obj3)

/**
 * 结论：那么深复制可能就需要层层递归，复制对象的所有属性，包括对象属性的属性的属性
 */