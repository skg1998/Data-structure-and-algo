import java.util.Scanner;

public class Stack {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        //basic stack use 
        java.util.Stack<Integer> st = new java.util.Stack<>();
        st.push(10);
        st.push(20);
        st.push(30);
        st.push(40);
        while(st.size()>0){
            System.out.print(st.size()+"->");
            System.out.println(st.pop());
        }
        
        //dublicate function
        String str = scn.nextLine();
        System.out.print(db(str));

        scn.close();
    }

    
    //function to check dublicate brackets
    public static boolean db(String str) {
        java.util.Stack<Character> st = new java.util.Stack<>();
        for(int i=0;i<str.length();i++){
             char ch = str.charAt(i);
             if(ch != ')'){
                 st.push(ch);
             }else{
                 if(st.peek()=='('){
                     return true;
                 }else{
                     while(st.peek() != '('){
                         st.pop();
                     }
                     st.pop();
                 }
             }
        }
        return false;
    }


    //find maximum araa functio 
    public static void lah(int[] arr , int n) {
        java.util.Stack<Integer> st = new java.util.Stack<>();
        int[] nsr = new int[arr.length];

        nsr[n-1] = arr.length;
        st.push(n-1);

        for(int i=nsr.length-2;i>=0;i++){
            //pop all bigger elements
            while(st.size() !=0 && arr[st.peek()] >=arr[i]){
                st.pop();
            }

            //check st size n update you ans
            if(st.size()==0){
                nsr[i]= arr.length;
            }else{
                nsr[i] = st.peek();
            }
            //push curr idx
            st.push(i);
        }

        int[] nsl = new int[arr.length];
        st = new java.util.Stack<>();

        nsl[0] = -1;
        st.push(0);
        for(int i=0;i<nsl.length;i++){
            //pop all bigger elements
            if(st.size() ==0){
                  nsr[i]=arr.length;
            }else{
                nsr[i] = st.peek();
            }
            //push curr idx
            st.push(i);
        }
    }
}