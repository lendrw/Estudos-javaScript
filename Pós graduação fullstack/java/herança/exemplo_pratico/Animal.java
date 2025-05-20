package herança.exemplo_pratico;

public class Animal {
    private String nome;

    public void setNome(String n){
        nome = n;
    }
    public String getNome(){
        return nome;
    }
    public void Comer(){
        System.out.println("estou comendo");
    }
}
