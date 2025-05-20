package collections.treeset;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        TreeSet<Integer> numeros = new TreeSet<>();
        numeros.add(4);
        numeros.add(45);
        numeros.add(24);
        System.out.println("TreeSet: " + numeros);

        boolean result = numeros.remove(4);
        System.out.println("Removeu? " + result);
        System.out.println("TreeSet: " + numeros);

        result = numeros.removeAll(numeros);
        System.out.println("TreeSet: " + numeros);
    }
}
