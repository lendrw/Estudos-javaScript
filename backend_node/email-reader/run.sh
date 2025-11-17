#!/bin/bash

echo "🤖 Iniciando Classificador de Emails IA..."

# Verificar se o ambiente virtual existe
if [ ! -d "venv" ]; then
    echo "❌ Ambiente virtual não encontrado!"
    echo "Execute primeiro: ./setup.sh"
    exit 1
fi

# Ativar ambiente virtual
source venv/bin/activate

# Verificar se as dependências estão instaladas
if ! python -c "import flask" 2>/dev/null; then
    echo "📦 Instalando dependências..."
    pip install -r requirements.txt
fi

echo "🚀 Iniciando servidor..."
echo "📱 Acesse: http://localhost:5000"
echo "⏹️  Para parar: Ctrl+C"
echo ""

python app.py