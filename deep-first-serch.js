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
// 深度优先遍历
function dfs(v){
    this.visited[v] = true
    if(this.adj[v] != undefined){
        console.log('visited vertice: ' + v)
    }
    for(w in this.adj[v]){
        if(!this.visited[this.adj[v][w]]){
            this.dfs(this.adj[v][w])
        }
    }
}

function Graph(v){
    // 顶点
    this.vertices = v
    // 边
    this.edges = 0
    this.adj = []
    for(var i = 0; i < this.vertices; ++i){
        this.adj[i] = []
    }
    this.visited = []
    this.dfs = dfs
    this.addEdge = addEdge
    this.showGraph = showGraph
}

g = new Graph(5)
g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(1,3)
g.addEdge(2,4)
g.showGraph()
g.dfs(0)
