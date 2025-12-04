// In java One tab has only one public class.
// we con't call the non-static method without creating object.
// we can call the staitc method within same the class without creating the object.

public class firstCode {

    //creating the method (non_static)
    public void add(int a, int b){
        System.out.println(a+b);
    }
    public static void main(String[] args){
        System.out.println("Hello Am firstCode");

        // creating the object for non_statoc method
        firstCode f=new firstCode();     
        f.add(9,8);

        //creating the object for out side created class.
        SecondClass s= new SecondClass();
        s.sub();
    }
}

class SecondClass{
    public void sub(){
        System.out.println("Hello am SecondClass");
    }
}
