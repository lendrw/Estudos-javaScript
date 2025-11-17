from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os
import PyPDF2
import io
from email_classifier import EmailClassifier

app = Flask(__name__)
CORS(app)

# Inicializar o classificador
classifier = EmailClassifier()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/classify', methods=['POST'])
def classify_email():
    try:
        email_text = ""
        
        # Verificar se é texto direto ou arquivo
        if 'email_text' in request.form and request.form['email_text'].strip():
            email_text = request.form['email_text']
        elif 'file' in request.files:
            file = request.files['file']
            if file.filename != '':
                if file.filename.endswith('.txt'):
                    email_text = file.read().decode('utf-8')
                elif file.filename.endswith('.pdf'):
                    pdf_reader = PyPDF2.PdfReader(io.BytesIO(file.read()))
                    email_text = ""
                    for page in pdf_reader.pages:
                        email_text += page.extract_text()
        
        if not email_text.strip():
            return jsonify({'error': 'Nenhum conteúdo de email fornecido'}), 400
        
        # Classificar email
        result = classifier.classify_and_respond(email_text)
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': f'Erro no processamento: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)