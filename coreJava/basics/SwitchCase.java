import java.util.Scanner;

public class SwitchCase{

public static void main(String[] args){

Scanner sc=new Scanner(System.in);
System.out.print("Enter the day number: ");
int day=sc.nextInt();

switch(day){

case 1:{
System.out.print("It's Sunday");
break;
}

case 2:{
System.out.print("It's Monday");
break;
}

case 3:{
System.out.print("It's Tuesday");
break;
}

case 4:{
System.out.print("It's Wednesday");
break;
}

case 5:{
System.out.print("It's Thursday");
break;
}

case 6:{
System.out.print("It's Friday");
break;
}


case 7:{
System.out.print("It's Saturday");
break;
}

default : {
System.out.print("It's In valid Day.");
break;
}
}

}
}