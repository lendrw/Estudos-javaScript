#!/bin/bash

echo "🚀 Configurando Classificador de Emails IA"
echo "=========================================="

# Instalar python3-venv se necessário
echo "📦 Verificando dependências do sistema..."
if ! dpkg -l | grep -q python3-venv; then
    echo "Instalando python3-venv..."
    sudo apt install python3.12-venv -y
fi

# Criar ambiente virtual
echo "🔧 Criando ambiente virtual..."
python3 -m venv venv

# Ativar ambiente virtual
echo "⚡ Ativando ambiente virtual..."
source venv/bin/activate

# Instalar dependências
echo "📚 Instalando dependências Python..."
pip install --upgrade pip
pip install -r requirements.txt

echo ""
echo "✅ Configuração concluída!"
echo ""
echo "Para executar a aplicação:"
echo "1. source venv/bin/activate"
echo "2. python app.py"
echo ""
echo "Acesse: http://localhost:5000"