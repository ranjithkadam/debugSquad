import java.util.Scanner;

class IsVowel{
public void Vowel(String c){
 
if(c=="a" || c=="e" || c== "i" || c== "o" || c== "u"){
System.out.println(c +" is Vowel");
}

else {
	System.out.println(c+" is Not Vowel");
}
}
}


class IsVowelMain{
public static void main(String[] args){
	
IsVowel vowel=new IsVowel();
	
Scanner sc=new Scanner(System.in);
System.out.println("Enter Any Character: ");
String ch1=sc.nextLine();
  

	 
vowel.Vowel(ch1.charAt(0));
}

}