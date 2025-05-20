package collections.iterator_e_comparator;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<>();

        numeros.add(1);
        numeros.add(10);
        numeros.add(100);

        System.out.println("Array list: " + numeros);

        //criando uma instancia de iterator
        Iterator<Integer> it = numeros.iterator();

        int numero = it.next();
        System.out.println("Elemento: " + numero);

        while(it.hasNext()){
            it.forEachRemaining((value) -> System.out.println(value + ","));
        }
    }
}
