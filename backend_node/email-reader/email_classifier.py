import re
import nltk
from transformers import pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
import warnings
warnings.filterwarnings('ignore')

class EmailClassifier:
    def __init__(self):
        # Download necessário do NLTK
        try:
            nltk.data.find('tokenizers/punkt')
        except LookupError:
            nltk.download('punkt')
        
        try:
            nltk.data.find('corpora/stopwords')
        except LookupError:
            nltk.download('stopwords')
        
        # Inicializar pipeline de classificação
        self.classifier = pipeline(
            "text-classification",
            model="cardiffnlp/twitter-roberta-base-sentiment-latest",
            return_all_scores=True
        )
        
        # Palavras-chave para classificação
        self.productive_keywords = [
            'solicitação', 'suporte', 'problema', 'erro', 'ajuda', 'dúvida',
            'status', 'atualização', 'urgente', 'prazo', 'documento',
            'aprovação', 'análise', 'revisão', 'pendente', 'sistema'
        ]
        
        self.unproductive_keywords = [
            'parabéns', 'felicitações', 'natal', 'ano novo', 'aniversário',
            'obrigado', 'agradecimento', 'cumprimentos', 'feliz', 'festa'
        ]
    
    def preprocess_text(self, text):
        # Limpar texto
        text = re.sub(r'[^\w\s]', ' ', text.lower())
        text = re.sub(r'\s+', ' ', text).strip()
        
        # Remover stopwords básicas
        stopwords = ['de', 'da', 'do', 'para', 'com', 'em', 'por', 'a', 'o', 'e']
        words = [word for word in text.split() if word not in stopwords]
        
        return ' '.join(words)
    
    def classify_email(self, email_text):
        processed_text = self.preprocess_text(email_text)
        
        # Análise por palavras-chave
        productive_score = sum(1 for keyword in self.productive_keywords 
                             if keyword in processed_text)
        unproductive_score = sum(1 for keyword in self.unproductive_keywords 
                               if keyword in processed_text)
        
        # Análise de sentimento como apoio
        sentiment_result = self.classifier(email_text[:512])  # Limitar tamanho
        
        # Lógica de classificação
        if productive_score > unproductive_score:
            category = "Produtivo"
            confidence = min(0.9, 0.6 + (productive_score * 0.1))
        elif unproductive_score > productive_score:
            category = "Improdutivo"
            confidence = min(0.9, 0.6 + (unproductive_score * 0.1))
        else:
            # Usar análise de sentimento como desempate
            if any(score['label'] == 'LABEL_1' and score['score'] > 0.6 
                   for score in sentiment_result[0]):
                category = "Improdutivo"
                confidence = 0.7
            else:
                category = "Produtivo"
                confidence = 0.6
        
        return category, confidence
    
    def generate_response(self, category, email_text):
        if category == "Produtivo":
            if any(word in email_text.lower() for word in ['status', 'atualização']):
                return "Obrigado pelo seu contato. Estamos verificando o status da sua solicitação e retornaremos com uma atualização em breve."
            elif any(word in email_text.lower() for word in ['problema', 'erro', 'suporte']):
                return "Recebemos sua solicitação de suporte. Nossa equipe técnica irá analisar o problema e entrar em contato com você nas próximas 24 horas."
            elif any(word in email_text.lower() for word in ['documento', 'aprovação']):
                return "Sua solicitação foi recebida e encaminhada para o setor responsável. Você receberá uma resposta dentro do prazo estabelecido."
            else:
                return "Obrigado pelo seu contato. Sua mensagem foi recebida e será analisada pela equipe responsável. Retornaremos em breve."
        else:
            if any(word in email_text.lower() for word in ['parabéns', 'felicitações']):
                return "Muito obrigado pelas felicitações! Ficamos felizes em compartilhar este momento com você."
            elif any(word in email_text.lower() for word in ['obrigado', 'agradecimento']):
                return "Ficamos felizes em poder ajudar! Estamos sempre à disposição para o que precisar."
            else:
                return "Obrigado pela sua mensagem! Ficamos felizes com o seu contato."
    
    def classify_and_respond(self, email_text):
        category, confidence = self.classify_email(email_text)
        response = self.generate_response(category, email_text)
        
        return {
            'category': category,
            'confidence': round(confidence * 100, 1),
            'suggested_response': response,
            'processed_text': self.preprocess_text(email_text)[:200] + "..."
        }