package collections.linkedList;
import java.util.*
;
public class Main {
    public static void main(String[] args) {
        LinkedList<String> animais = new LinkedList<>();

        animais.add("cachorro");
        animais.add("cavalo");
        animais.add("vaca");
        System.out.println("LinkedList: " + animais);

        animais.add(1, "gato");

        System.out.println("LinkedList: " + animais);
        
    }
}
