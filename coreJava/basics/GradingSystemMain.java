import java.util.Scanner;

class GradingSystem{
public void Grade(int marks){
if(marks >= 90 && marks<=100) System.out.println("A Grade");
else if(marks <=89 && marks >=50) System.out.println("B Grade");
else System.out.println("Fail");
}
}

class GradingSystemMain{
public static void main(String[] args){
Scanner sc= new Scanner(System.in);
System.out.println("Enter the Marks: ");

int marks= sc.nextInt();

GradingSystem g= new GradingSystem();
g.Grade(marks);
}
}