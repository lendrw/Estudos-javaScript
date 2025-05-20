import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        System.out.println("Olá mundo");

        String palavra;
        Scanner entrada = new Scanner(System.in);
        palavra = entrada.next();

        System.out.println("Palavra: " + palavra);
    }
}