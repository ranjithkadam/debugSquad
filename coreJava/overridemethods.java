public class overridemethods {
   public void method(int id, String name){
    System.out.println("Id is: "+id+ " Name is: "+name);
   } 

   public void method(int id, String name, int salary){
    System.out.println("Id is: "+id+ "name is: "+ "The Salary is: "+salary);
   }

   public void method(String[] items){
    for(String name: items){
    System.out.println(name);
    }
   }
   public static void main(String[] args){
    overridemethods or= new overridemethods();
    or.method(10, "Ranjith");
    or.method(20,"Rajkumar", 20000);
    String arr[]={"raj", "ranjith", "tony", "sidhu"};
    or.method(arr);
   }
}
