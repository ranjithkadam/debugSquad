import java.util.Scanner;

class Scanner {
  public static void main(String[] args){ 
    Scanner sc= new Scanner(System.in);
    System.out.print("Eneter Your Name: ");
    String name=sc.nextLine();
    System.out.println(name);
	
sc.close();
  }  
}