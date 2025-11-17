document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
    const loading = document.getElementById('loading');
    const resultsSection = document.getElementById('resultsSection');
    const fileInput = document.getElementById('file');
    const fileDisplay = document.querySelector('.file-input-display span');

    // Atualizar display do arquivo selecionado
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            fileDisplay.textContent = `Arquivo selecionado: ${this.files[0].name}`;
        } else {
            fileDisplay.textContent = 'Clique para selecionar ou arraste o arquivo aqui';
        }
    });

    // Drag and drop
    const fileWrapper = document.querySelector('.file-input-wrapper');
    
    fileWrapper.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.querySelector('.file-input-display').style.borderColor = '#667eea';
        this.querySelector('.file-input-display').style.background = '#f8f9ff';
    });

    fileWrapper.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.querySelector('.file-input-display').style.borderColor = '#e0e0e0';
        this.querySelector('.file-input-display').style.background = 'transparent';
    });

    fileWrapper.addEventListener('drop', function(e) {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            fileDisplay.textContent = `Arquivo selecionado: ${files[0].name}`;
        }
        this.querySelector('.file-input-display').style.borderColor = '#e0e0e0';
        this.querySelector('.file-input-display').style.background = 'transparent';
    });

    // Submissão do formulário
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const emailText = document.getElementById('email_text').value.trim();
        const file = fileInput.files[0];
        
        if (!emailText && !file) {
            alert('Por favor, digite um texto ou selecione um arquivo.');
            return;
        }

        loading.style.display = 'flex';
        resultsSection.style.display = 'none';

        const formData = new FormData();
        if (emailText) {
            formData.append('email_text', emailText);
        }
        if (file) {
            formData.append('file', file);
        }

        try {
            const response = await fetch('/classify', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                displayResults(result);
            } else {
                alert(`Erro: ${result.error}`);
            }
        } catch (error) {
            alert(`Erro de conexão: ${error.message}`);
        } finally {
            loading.style.display = 'none';
        }
    });

    function displayResults(result) {
        const categoryElement = document.getElementById('categoryResult');
        const confidenceElement = document.getElementById('confidenceResult');
        const responseElement = document.getElementById('responseResult');

        // Classificação com cor
        categoryElement.innerHTML = `<span class="category-${result.category.toLowerCase()}">${result.category}</span>`;
        
        // Confiança com barra de progresso
        confidenceElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span>${result.confidence}%</span>
                <div style="flex: 1; height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
                    <div style="width: ${result.confidence}%; height: 100%; background: ${result.confidence > 70 ? '#27ae60' : result.confidence > 50 ? '#f39c12' : '#e74c3c'}; transition: width 0.5s;"></div>
                </div>
            </div>
        `;
        
        responseElement.textContent = result.suggested_response;

        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Copiar resposta
    document.getElementById('copyResponse').addEventListener('click', function() {
        const responseText = document.getElementById('responseResult').textContent;
        navigator.clipboard.writeText(responseText).then(function() {
            const btn = document.getElementById('copyResponse');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            btn.style.background = '#27ae60';
            
            setTimeout(function() {
                btn.innerHTML = originalText;
                btn.style.background = '#27ae60';
            }, 2000);
        });
    });
});