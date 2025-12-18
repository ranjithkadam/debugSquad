public class Task1{

public static void method1(){
System.out.println("Hello am Method1");
}

public static void mathOperations(){
int a=10, b=20;
int sum=a+b;
int sub=b-a;
System.out.println("Sum of two Numbers is: "+sum);
System.out.println("Sub of two Numbers is: "+sub);
System.out.println("Multiplication of two numbers is:"+(a*b));
}

public static void swap(){
int a=10, b=20;
System.out.println("Before swapping the numbers a:"+a+" and b:"+b);
int swap=a;
a=b;
b=swap;
System.out.println("After swapping the numbers a:"+a+" and b:"+b);

}
public static void main(String[] args){
System.out.println("hello World..");
mathOperations();
swap();
 
}
}