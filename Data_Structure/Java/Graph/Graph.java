package Data_Structure.Java.Graph;

import java.util.ArrayList;

public class Graph{
    public static class Edge{
       int src;
       int nbr;
       int wt;
       
       public Edge(int src,int nbr , int wt){
           this.src = src;
           this.nbr = nbr;
           this.wt = wt;
       }
    }

    public static void main(String[] args){
        ArrayList<Edge>[] graph = new ArrayList<Edge>[7];
        for(int i=0;i<graph.length;i++){
            graph[i] = new java.util.ArrayList<>();
        }

        graph[0].add(new Edge(0, 1, 10));
        graph[0].add(new Edge(0, 3, 40));

        graph[1].add(new Edge(1,0, 10));
        graph[1].add(new Edge(1,0, 10));

        graph[2].add(new Edge(2, 1, 10));
        graph[2].add(new Edge(2, 3, 10));

        graph[3].add(new Edge(3, 0, 40));
        graph[3].add(new Edge(3, 2, 10));
        graph[3].add(new Edge(3, 4, 2));

        graph[4].add(new Edge(4, 3, 2));
        graph[4].add(new Edge(4, 5, 3));
        graph[4].add(new Edge(4, 6, 8));

        graph[5].add(new Edge(5, 4, 3));
        graph[5].add(new Edge(5, 6, 3));

        graph[6].add(new Edge(6, 4, 8));
        graph[6].add(new Edge(6, 5, 3));
        
        //call hasPAth function
        System.out.println(hasPath(graph, 0, 5, new boolean[7]));
    }
    

    //function to visited all nodes of graph
    public static boolean hasPath(ArrayList<Edge>[] graph, int src, int dest, boolean[] visited) {
        if (src == dest) {
            return true;
        }
        visited[src] = true;
        for (Edge e : graph[src]) {
            int nbr = e.nbr;
            if (visited[nbr] == false) {
                boolean hpfntod = hasPath(graph, src, dest, visited);
                if(hpfntod ==true){
                    return true;
                }
            }
            return  false;
        }
        return false;
    }
}