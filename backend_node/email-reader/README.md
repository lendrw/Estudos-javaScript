# Classificador de Emails com IA

Sistema inteligente para classificação automática de emails e geração de respostas usando processamento de linguagem natural e inteligência artificial.

## 🚀 Funcionalidades

- **Classificação Inteligente**: Categoriza emails em "Produtivo" ou "Improdutivo"
- **Respostas Automáticas**: Gera sugestões de resposta baseadas no conteúdo
- **Interface Intuitiva**: Upload de arquivos (.txt, .pdf) ou inserção direta de texto
- **Processamento NLP**: Análise avançada de texto com limpeza e tokenização
- **IA Integrada**: Utiliza modelos Hugging Face para análise de sentimento

## 🛠️ Tecnologias

- **Backend**: Python, Flask, Transformers, NLTK
- **Frontend**: HTML5, CSS3, JavaScript
- **IA**: Hugging Face Transformers, Scikit-learn
- **Processamento**: PyPDF2, NLP

## 📦 Instalação e Execução

### Opção 1: Versão Simples (Recomendada)
**Funciona sem dependências externas!**

```bash
# Execute diretamente
./run_simple.sh

# OU manualmente
python3 simple_classifier.py
```

### Opção 2: Versão Completa (com IA avançada)
**Requer instalação de dependências**

```bash
# 1. Configurar ambiente
./setup.sh

# 2. Executar aplicação
./run.sh
```

### Acesso
```
http://localhost:5000
```

## 🎯 Como Usar

1. **Inserir Email**: Digite o texto diretamente ou faça upload de arquivo (.txt/.pdf)
2. **Classificar**: Clique em "Classificar Email" para processar
3. **Visualizar Resultados**: Veja a categoria, confiança e resposta sugerida
4. **Copiar Resposta**: Use o botão para copiar a resposta automática

## 🧠 Algoritmo de Classificação

### Critérios de Classificação:

**Produtivo**:
- Solicitações de suporte técnico
- Pedidos de status/atualização
- Dúvidas sobre sistemas
- Documentos para aprovação
- Problemas técnicos

**Improdutivo**:
- Mensagens de felicitações
- Agradecimentos
- Cumprimentos sazonais
- Mensagens sociais

### Processo de Análise:

1. **Pré-processamento**: Limpeza de texto, remoção de stopwords
2. **Análise de Palavras-chave**: Identificação de termos relevantes
3. **Análise de Sentimento**: Suporte via modelo RoBERTa
4. **Classificação Final**: Combinação de métricas com score de confiança
5. **Geração de Resposta**: Resposta contextualizada baseada na categoria

## 📊 Estrutura do Projeto

```
email-reader/
├── app.py                 # Aplicação Flask principal
├── email_classifier.py    # Lógica de classificação IA
├── requirements.txt       # Dependências Python
├── templates/
│   └── index.html        # Interface web
├── static/
│   ├── css/
│   │   └── style.css     # Estilos
│   └── js/
│       └── script.js     # JavaScript
└── README.md
```

## 🎨 Interface

- **Design Responsivo**: Funciona em desktop e mobile
- **Drag & Drop**: Arraste arquivos diretamente
- **Feedback Visual**: Indicadores de progresso e confiança
- **UX Intuitiva**: Interface limpa e fácil de usar

## 🔧 Configuração Avançada

Para personalizar a classificação, edite as palavras-chave em `email_classifier.py`:

```python
self.productive_keywords = [
    'solicitação', 'suporte', 'problema', 'erro', 'ajuda'
    # Adicione suas palavras-chave
]
```

## 📈 Melhorias Futuras

- [ ] Treinamento com dados específicos da empresa
- [ ] Integração com APIs de email (Gmail, Outlook)
- [ ] Dashboard de métricas e relatórios
- [ ] Múltiplas categorias personalizáveis
- [ ] Histórico de classificações

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.