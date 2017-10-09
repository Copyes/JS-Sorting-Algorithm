var obj1 = {
    'name': 'fan',
    'age': '18',
    'language': [1,[2,3],[4,5]]
}

var obj2 = obj1

var obj3 = shallowCopy(obj1)

function shallowCopy(src){
    if(typeof src !== 'object'){
        return 
    }
    var dist
    if(src.constructor === Array){
        dist = []
    }else{
        dist = {}
        dist.constructor = src.constructor
    }
    for(var item in src) {
        if(src.hasOwnProperty(item)){
            dist[item] = src[item]
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
 * 结论：浅拷贝只拷贝最外层的非引用类型的数据
 * 上面的浅拷贝会保留原对象的constructor
 */