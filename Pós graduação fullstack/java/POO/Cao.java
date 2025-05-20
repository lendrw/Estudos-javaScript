public class Cao {
    String nome;
    String cor;
    int idade;
    double peso;

    public Cao(){
        cor = "caramelo";
    }

    public Cao(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    public void DadosCao(){
        System.out.println(nome + " " + idade);
    }

    public void Anda(){
        System.out.println("andando..." + cor);
    }
}
