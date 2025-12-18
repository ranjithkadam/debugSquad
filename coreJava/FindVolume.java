class VolumeDetails{
    private int width;
    private int height;
    private int depth;

    public void details(int width1, int height1, int depth1){
        width=width1;
        height= height1;
        depth = depth1;
    }

    public  void volume(){
        System.out.println("The Volume is "+(height*width*depth));
    }
}

public class FindVolume {

    FindVolume(){
        System.out.println("Hello am constructor");
    }
    public static void main(String[] args){
        VolumeDetails v = new VolumeDetails();
        v.details(10, 5, 12);
        v.volume();

         VolumeDetails v2 = new VolumeDetails();
         v2.details(20, 75, 2);
        v2.volume();
                new FindVolume();

    }
}
