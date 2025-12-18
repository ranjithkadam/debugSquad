import java.util.Scanner;

public class MainIsPositive{
public static void main(String args[]){

Scanner sc= new Scanner(System.in);
System.out.println("Enter any number: ");
int num= sc.nextInt();

if(num<0){
System.out.println("Negative Number");
}

else if(num>0){
System.out.println("Positive Number");
}

else{
System.out.println("Zero value.");
}


}
}