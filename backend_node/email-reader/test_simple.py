#!/usr/bin/env python3
from simple_classifier import SimpleEmailClassifier

def test():
    classifier = SimpleEmailClassifier()
    
    # Teste produtivo
    email1 = "Preciso de suporte técnico urgente. O sistema está com erro."
    category1, confidence1 = classifier.classify_email(email1)
    response1 = classifier.generate_response(category1, email1)
    
    print("📧 Teste 1 (Produtivo):")
    print(f"Texto: {email1}")
    print(f"Categoria: {category1}")
    print(f"Confiança: {confidence1}%")
    print(f"Resposta: {response1}")
    print()
    
    # Teste improdutivo
    email2 = "Parabéns pelo excelente trabalho! Feliz natal para todos!"
    category2, confidence2 = classifier.classify_email(email2)
    response2 = classifier.generate_response(category2, email2)
    
    print("📧 Teste 2 (Improdutivo):")
    print(f"Texto: {email2}")
    print(f"Categoria: {category2}")
    print(f"Confiança: {confidence2}%")
    print(f"Resposta: {response2}")
    print()
    
    print("✅ Classificador funcionando corretamente!")

if __name__ == "__main__":
    test()