class BasicPrograme{
    public static void main(String args[]){

        String[] arr = {"apples","mango", "grapes","papaya"};
        List<String> list1 = new ArrayList<String>();
        for(String arrlist : arr){
            list1.add(arrlist);
        }
        
        String[] morearr = {"banana","orange","pear"};
        List<String> list2 = new ArrayList<String>();
        for(String morearrlist: morearr){
            list2.add(morearrlist);
        }

        for(int i=0;i<list1.size();i++){
            System.out.printf("%s",list1.get(i));
        }

        editList(list1,list2);
        System.out.println();
        
        //print element of list1
        for(int i=0;i<list1.size();i++){
            System.out.printf("%s",list1.get(i));
        }
    }

    public static void editList(collection<String> l1,collection<String> l2){
        Itrator<String> it = new 
    }
}