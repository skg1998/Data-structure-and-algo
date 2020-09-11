package Data_Structure.Java.HashMap;
public class HashMap {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        String str = scn.next();

        java.util.HashMap<String,Integer> map = new java.util.HashMap<>();
        
        int max=1;
        
        for(int i =0;i<str.length(); i++){
            char ch = str.charAt(i);
            if(map.containsKey(ch)==true){
                int ov = map.get(ch);
                map.put(ch,ov+1);
                max = Math.max(max,ov+1);
            }else{
                map.put(ch,1);
            }
        }

        ArrayList<Character> keys = new ArrayList<>(map.keySet());
        for(char key:keys){
            if(map.get(key)==max){
                System.out.println(key);
                break;
            }
        }
    }


    // commondigit
    public static void commonNumber(){
        Scanner scn = new Scanner(System.in);
        int n1 = scn.nextInt();
        int[] arr1 = new int[n1];
        for(int i=0; i<arr1.length;i++){
            arr1[i] = scn.nextInt();
        }

        int n2 = scn.nextInt();
        int[] arr2 = new int[n2];
        for(int i=0;i<arr2.length; i++){
            arr2[i] = scn.nextInt();
        }

        HashMap<Integer,Integer> fmap = new HashMap<>();
        for(int i=0;i<arr1.length;i++){
            fmap.put(arr[i],1);
        }

        for(int i=0;i<arr2.length ;i++){
            if(map.containsKey(arr2[i])){
                System.out.println(arr2[i]);
                map.remove(arr2[i]);
            }
        }

    }
}


class Reactangle {                        // class with name reactangle
    int length ,width;                    // declareation of length and width variable
    void getData(int x, int y){           //defination of methd
        length = x;                        //assigning the value of x in length
        width = y;                         //assigning the vaLUE of y in width
    }

    int reactArea(){                     // defination of method reactArea 
        int area = length * width;        // declareation of area variable and assign value multiplication of length and width
        return (area);                    // return the  area
    }
}

class ReactArea{                                   //class with name ReactArea
    public static void main(String args[]){         //main method
        int area1, area2;                          // decleration ofreact1 and react2 variable
        Reactangle react1 = new Reactangle();      //creating object react1 in heap memory
        Reactangle react2 = new Reactangle();      //creating object react2 in heap memory
        react1.length = 15;                       //Accessing variable of Reactangle class
        react2.width = 10;                        //Accessing variable of Reactangle class
        area1 = react1.length * react1.width;      //calculation of accessing variable
        react2.getData(20,12);                     // Accessing method of class
        react2 = react2.reactArea();              // Accessing method of class
        System.out.println("Area1 = " + area1);    //print the area1 in new line
        System.out.println("Area2 = " + area2);   // print the area2 in new line

    }
}



class Pen {
    int redValue, greenValue, blueValue;
    void getRGBColor(int red, int green, int blue) {
	red = redValue;
	green = greenValue;
	blue = blueValue;
    }
}

Class PenColor{
    public static void main(String args[]){
        int r = -1, g = -1, b = -1;
        pen.getRGBColor(r, g, b);
        System.out.println("red = " + r + ", green = " + g + ", blue = " + b);
    }
}
