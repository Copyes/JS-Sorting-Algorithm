// 添加一个边
function addEdge(v, w){
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
}
// 打印图
function showGraph(){
    for(let i = 0; i < this.vertices; ++i){
        let str = ''
        str = i + '->'
        for(let j = 0; j < this.vertices; ++j){
            if(this.adj[i][j] != undefined){
                str += this.adj[i][j] + ','
            }
        }
        console.log(str)
    }
    console.log('total edges: ' + this.edges)
}

function Graph(v){
    // 顶点
    this.vertices = v
    // 边
    this.edges = 0
    this.adj = []
    for(var i = 0; i < this.vertices; ++i){
        this.adj[i] = []
        //this.adj[i].push('')
    }
    this.addEdge = addEdge
    this.showGraph = showGraph
}

g = new Graph(5)
g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(1,3)
g.addEdge(2,4)
g.showGraph()
