#!/usr/bin/env python3
"""
Script de teste para o classificador de emails
"""

from email_classifier import EmailClassifier

def test_classifier():
    classifier = EmailClassifier()
    
    # Emails de teste
    test_emails = [
        {
            "text": "Olá, estou com um problema no sistema. Não consigo acessar minha conta e preciso de suporte técnico urgente.",
            "expected": "Produtivo"
        },
        {
            "text": "Gostaria de saber o status da minha solicitação de aprovação enviada na semana passada.",
            "expected": "Produtivo"
        },
        {
            "text": "Parabéns pelo excelente trabalho! Desejo um feliz natal para toda a equipe.",
            "expected": "Improdutivo"
        },
        {
            "text": "Muito obrigado pela ajuda de ontem. Vocês são incríveis!",
            "expected": "Improdutivo"
        },
        {
            "text": "Preciso de uma atualização sobre o documento que enviei para análise.",
            "expected": "Produtivo"
        }
    ]
    
    print("🧪 Testando Classificador de Emails\n")
    print("=" * 60)
    
    correct = 0
    total = len(test_emails)
    
    for i, email in enumerate(test_emails, 1):
        result = classifier.classify_and_respond(email["text"])
        
        print(f"\n📧 Teste {i}:")
        print(f"Texto: {email['text'][:80]}...")
        print(f"Esperado: {email['expected']}")
        print(f"Resultado: {result['category']}")
        print(f"Confiança: {result['confidence']}%")
        print(f"Resposta: {result['suggested_response'][:100]}...")
        
        if result['category'] == email['expected']:
            print("✅ CORRETO")
            correct += 1
        else:
            print("❌ INCORRETO")
        
        print("-" * 60)
    
    accuracy = (correct / total) * 100
    print(f"\n📊 Resultados Finais:")
    print(f"Acertos: {correct}/{total}")
    print(f"Precisão: {accuracy:.1f}%")
    
    if accuracy >= 80:
        print("🎉 Excelente performance!")
    elif accuracy >= 60:
        print("👍 Boa performance!")
    else:
        print("⚠️ Performance pode ser melhorada")

if __name__ == "__main__":
    test_classifier()