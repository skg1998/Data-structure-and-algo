class StringLecture {
     public static void main(String[] args) {

        //index of char in string
         String str = "wertyooffnmmsmsasndnfvmkxx";
         System.out.print(str.indexOf('t'));

         //index of char in string after x number
         String str2 = "wertyooffnmmsmsasndnfvmkxx";
         System.out.print(str2.indexOf('m',10));

         //concate two string 
         System.out.print(str + str2);
         System.out.print(str.concate(str2));

         //replace the char
         System.out.print(str.replace('r','y'));

         //upperCase
         System.out.print(str.upperCase().trim());
     }
}