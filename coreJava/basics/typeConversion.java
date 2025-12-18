public class typeConversion {
    public static void main(String[] args){
        byte b=123;
        short s=12345;
        int n=345665;
        float f=123.45f;
        double d=321.345;

        // Converting byte to int and int to byte
        b= (byte)n;
        System.out.println(b);

        n = (int)b;
        System.out.println(n);

        s=(short)12.21;
        System.out.println(s);

        d=(double)1;
        System.out.println(d);

        f=(float).0;
        System.out.println(f);
    }
}
