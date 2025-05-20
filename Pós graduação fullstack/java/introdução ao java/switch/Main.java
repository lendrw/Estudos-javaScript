import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Escolha uma opção: ");
        System.out.println("1 - cadastrar aluno: ");
        System.out.println("2 - cadastrar notas: ");
        System.out.println("3 - listar alunos e nota: ");

        int numero = entrada.nextInt();

        switch (numero) {
            case 1:
                System.out.println("cadastrar aluno");
                break;
            case 2: 
                System.out.println("cadastrar notas");
                break;
            case 3:
                System.out.println("listar alunos e notas");
                break;
            default:
             System.out.println("número inválido");
        }
    }
}
