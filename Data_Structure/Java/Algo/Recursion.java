class Recursion {
    public static  void  main(String[] args) {
        
    }

    public static long fict(long n) {
        if(n <= 1){
            return 1;
        }else{
            return n*fict(n-1);
        }
    }
}