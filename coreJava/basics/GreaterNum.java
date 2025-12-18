import java.util.Scanner;

class GreaterNum{

public static void main(String[] args){
Scanner sc = new Scanner(System.in);

System.out.print("Enter the First Number: ");
int num1=sc.nextInt();

System.out.print("Enter the Second Number: ");
int num2=sc.nextInt();

if(num1 > num2){
System.out.println(num1+ " is Greater");
}

else{
System.out.println(num2+ " is Greater");
}
}
}