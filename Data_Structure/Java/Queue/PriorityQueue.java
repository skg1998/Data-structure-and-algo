//Complexity of 
// add = logn
// remove = logn
// peek = 1
// size = 1


package Data_Structure.Java.PriorityQueue;
public class PriorityQueue{
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);

        int n = scn.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<arr.length; i++){
            arr[i] = scn.nextInt();
        }
        
        //java by default give minimum value to maximum priority
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for(int i=0; i<arr.length ; i++){
            pq.add(arr[i]);
        }

        // assuming array = 34 3 456 -345 1

        while(pq.size() !=0){
            System.out.println(pq.remove);
        }

        //return value = -345 1 3 34 456


        //what if we want to cange priority of value
        //PriorityQueue<Integer> rpq = new PriorityQueue<>(Collections.reverseOrder()); 
    }
}