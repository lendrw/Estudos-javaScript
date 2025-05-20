public class Main {
    public static void main(String[] args) {
        int[] lista = {8,1,3,5,16,7,9,41,2,10};

        int x = lista[0];

        for(int i=0; i<10;i++){
            if(lista[i] % 2 == 0){
                if(lista[i] > x){
                    x = lista[i];
                }
            }
            System.out.println("Resultado: " + x);
        }
    }
}
