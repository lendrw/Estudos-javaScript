package collections.hashset;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        HashSet<Integer> numeros = new HashSet<>();
        numeros.add(2);
        numeros.add(4);
        numeros.add(9);

        Iterator<Integer> it = numeros.iterator();
        while(it.hasNext()){
            System.out.println(it.hasNext());
        }
    }
}
