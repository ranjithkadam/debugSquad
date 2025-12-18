 


class InstanceVariable{

    private int num1;       //Instance Variable
    private String str1;    // Instance Variable

    public void getVar(int num, String str){
        num1=num;
        str1= str;
        System.out.println(num1);
        System.out.println(str1);
    }
    InstanceVariable(int n, String s){
        System.out.println("Number is "+n+" name is "+s);
        System.out.println("Hello am Constructor");
    }
    public static void main(String[] args){
        InstanceVariable in = new InstanceVariable(12, "Ram");
        in.getVar(20,"ranjith");
         
       
    }
}