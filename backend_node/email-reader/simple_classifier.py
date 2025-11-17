#!/usr/bin/env python3
"""
Classificador de emails simples - sem dependências externas
"""
import re
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.parse
import os

class SimpleEmailClassifier:
    def __init__(self):
        self.productive_keywords = [
            'solicitação', 'suporte', 'problema', 'erro', 'ajuda', 'dúvida',
            'status', 'atualização', 'urgente', 'prazo', 'documento',
            'aprovação', 'análise', 'revisão', 'pendente', 'sistema'
        ]
        
        self.unproductive_keywords = [
            'parabéns', 'felicitações', 'natal', 'ano novo', 'aniversário',
            'obrigado', 'agradecimento', 'cumprimentos', 'feliz', 'festa'
        ]
    
    def classify_email(self, text):
        text_lower = text.lower()
        
        productive_score = sum(1 for keyword in self.productive_keywords if keyword in text_lower)
        unproductive_score = sum(1 for keyword in self.unproductive_keywords if keyword in text_lower)
        
        if productive_score > unproductive_score:
            return "Produtivo", min(90, 60 + (productive_score * 10))
        elif unproductive_score > productive_score:
            return "Improdutivo", min(90, 60 + (unproductive_score * 10))
        else:
            return "Produtivo", 65
    
    def generate_response(self, category, text):
        text_lower = text.lower()
        
        if category == "Produtivo":
            if any(word in text_lower for word in ['status', 'atualização']):
                return "Obrigado pelo seu contato. Estamos verificando o status da sua solicitação e retornaremos com uma atualização em breve."
            elif any(word in text_lower for word in ['problema', 'erro', 'suporte']):
                return "Recebemos sua solicitação de suporte. Nossa equipe técnica irá analisar o problema e entrar em contato com você nas próximas 24 horas."
            else:
                return "Obrigado pelo seu contato. Sua mensagem foi recebida e será analisada pela equipe responsável. Retornaremos em breve."
        else:
            if any(word in text_lower for word in ['parabéns', 'felicitações']):
                return "Muito obrigado pelas felicitações! Ficamos felizes em compartilhar este momento com você."
            else:
                return "Obrigado pela sua mensagem! Ficamos felizes com o seu contato."

class EmailHandler(BaseHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        self.classifier = SimpleEmailClassifier()
        super().__init__(*args, **kwargs)
    
    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            
            with open('templates/index.html', 'r', encoding='utf-8') as f:
                html = f.read()
            
            self.wfile.write(html.encode())
        
        elif self.path.startswith('/static/'):
            file_path = self.path[1:]  # Remove leading /
            if os.path.exists(file_path):
                self.send_response(200)
                if file_path.endswith('.css'):
                    self.send_header('Content-type', 'text/css')
                elif file_path.endswith('.js'):
                    self.send_header('Content-type', 'application/javascript')
                self.end_headers()
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    self.wfile.write(f.read().encode())
            else:
                self.send_response(404)
                self.end_headers()
    
    def do_POST(self):
        if self.path == '/classify':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            # Parse form data
            data = urllib.parse.parse_qs(post_data.decode())
            email_text = data.get('email_text', [''])[0]
            
            if email_text.strip():
                category, confidence = self.classifier.classify_email(email_text)
                response_text = self.classifier.generate_response(category, email_text)
                
                result = {
                    'category': category,
                    'confidence': confidence,
                    'suggested_response': response_text
                }
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                
                self.wfile.write(json.dumps(result).encode())
            else:
                self.send_response(400)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                
                error = {'error': 'Nenhum texto fornecido'}
                self.wfile.write(json.dumps(error).encode())

def run_server():
    server = HTTPServer(('localhost', 5000), EmailHandler)
    print("🤖 Classificador de Emails IA")
    print("🚀 Servidor iniciado em: http://localhost:5000")
    print("⏹️  Para parar: Ctrl+C")
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 Servidor encerrado")
        server.shutdown()

if __name__ == '__main__':
    run_server()