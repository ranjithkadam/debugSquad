import java.util.Scanner;
class HasVote{
public void Eligibility(int age){

if(age<18){
System.out.println("Not Eligible for vote..!");
}

else{
System.out.println("Eligible for Vote");
}

}
}

class Main{
public static void main(String[] args){
HasVote vote=new HasVote();
Scanner sc=new Scanner(System.in);
System.out.print("Enter the Age: ");
int age= sc.nextInt();
vote.Eligibility(age);
}
}