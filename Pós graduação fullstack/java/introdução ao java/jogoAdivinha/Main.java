import java.util.*;

public class Main {
    public static void main(String[] args) {
        Random gerador = new Random();
        int x = gerador.nextInt(100);

        Scanner entrada = new Scanner(System.in);
        System.out.println("Adivinhe o número ");
        int numero = entrada.nextInt();

        if (numero == x) {
            System.out.println("Parabéns, vc acertou, eu pensei no " + x);
        }

        else {
            System.out.println("Vc errou, eu pensei no " + x);
        }
    }
}
