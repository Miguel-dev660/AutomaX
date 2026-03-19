# 🚀 Guia Completo: Hospedar AutoMax no GitHub Pages

## ✅ Por que GitHub Pages?

- 🆓 **100% GRATUITO**
- ⚡ **Rápido e confiável**
- 🌐 **SSL/HTTPS automático**
- 📱 **Domínio personalizado opcional**
- 🔄 **Deploy automático ao fazer push**

---

## 📋 Pré-requisitos

1. ✅ Conta no GitHub (gratuita)
2. ✅ Arquivos do site prontos (já temos!)
3. ✅ Git instalado (opcional, pode usar interface web)

---

## 🎯 MÉTODO 1: Upload Direto (Mais Fácil!)

### Passo 1: Criar Repositório

1. Acesse [GitHub](https://github.com)
2. Clique em **"New"** ou **"+"** → **"New repository"**
3. Preencha:
   - **Nome:** `automax` (ou o que preferir)
   - **Descrição:** "Site profissional de automação Python"
   - **Public** ✅ (necessário para GitHub Pages grátis)
   - **NÃO** marque "Add README" (já temos)
4. Clique em **"Create repository"**

### Passo 2: Upload dos Arquivos

1. Na página do repositório, clique em **"uploading an existing file"**
2. Arraste e solte TODOS os arquivos:
   ```
   ✅ index.html
   ✅ style.css
   ✅ script.js
   ✅ README.md
   ✅ .gitignore
   ✅ pasta demos/ (vazia ou com vídeos)
   ```
3. Escreva a mensagem: `"🎉 AutoMax - Site completo"`
4. Clique em **"Commit changes"**

### Passo 3: Ativar GitHub Pages

1. Vá em **Settings** (⚙️ no topo)
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"**:
   - Branch: `main` (ou `master`)
   - Folder: `/ (root)`
4. Clique em **"Save"**
5. ⏳ Aguarde 2-5 minutos

### Passo 4: Acessar o Site

Seu site estará disponível em:
```
https://SEU-USUARIO.github.io/automax
```

🎉 **Pronto!** Seu site está no ar!

---

## 🎯 MÉTODO 2: Usando Git (Para Desenvolvedores)

### Passo 1: Instalar Git

**Windows:** Baixe em [git-scm.com](https://git-scm.com)  
**Mac:** `brew install git`  
**Linux:** `sudo apt install git`

### Passo 2: Configurar Git

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Passo 3: Inicializar Repositório Local

```bash
# Navegue até a pasta do projeto
cd /app

# Inicialize o Git
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "🎉 AutoMax - Site completo"
```

### Passo 4: Conectar ao GitHub

1. Crie repositório no GitHub (Método 1, Passo 1)
2. Copie a URL do repositório (exemplo: `https://github.com/SEU-USUARIO/automax.git`)
3. Execute:

```bash
# Adicione o remote
git remote add origin https://github.com/SEU-USUARIO/automax.git

# Envie para o GitHub
git branch -M main
git push -u origin main
```

### Passo 5: Ativar GitHub Pages

Siga Método 1, Passos 3 e 4

---

## 🌐 Domínio Personalizado (Opcional)

### Usar Domínio Próprio

1. Compre um domínio (ex: `automax.com.br`)
2. No painel do domínio, adicione registro:
   ```
   CNAME → www → SEU-USUARIO.github.io
   ```
3. No GitHub:
   - Settings → Pages
   - Custom domain: `www.automax.com.br`
   - Marque "Enforce HTTPS"

---

## 🔄 Atualizações Futuras

### Via Interface Web:

1. Acesse o repositório
2. Clique no arquivo que quer editar
3. Clique no ✏️ (Edit)
4. Faça as alterações
5. Clique em **"Commit changes"**
6. Site atualiza automaticamente em 1-2 minutos!

### Via Git:

```bash
# Faça suas alterações nos arquivos
# Depois:

git add .
git commit -m "✨ Atualização: [descreva a mudança]"
git push origin main
```

---

## 📂 Estrutura Recomendada para GitHub

```
seu-repositorio/
├── index.html          # ✅ Obrigatório (página principal)
├── style.css           # ✅ Seus estilos
├── script.js           # ✅ Seu JavaScript
├── README.md           # ✅ Documentação
├── .gitignore          # ✅ Ignorar arquivos
├── LICENSE             # 📄 Licença (opcional)
├── demos/              # 📁 Vídeos
│   ├── report_demo.mp4
│   ├── whatsapp_demo.mp4
│   └── ...
└── images/             # 📁 Imagens (se houver)
    └── logo.png
```

---

## ⚠️ Limitações do GitHub Pages

- ✅ Sites estáticos (HTML, CSS, JS) → **Perfeito para você!**
- ❌ Backend/servidor (PHP, Python, Node.js) → Não funciona
- ✅ Tamanho: até 1GB
- ✅ Largura de banda: 100GB/mês (mais que suficiente)
- ✅ HTTPS automático
- ✅ CDN global (rápido no mundo todo)

**Seu site AutoMax é 100% compatível!** ✅

---

## 🎨 Personalizações Antes do Deploy

### 1. Atualizar Links

Em `README.md`, substitua:
```
https://SEU-USUARIO.github.io/automax
```
Por sua URL real.

### 2. WhatsApp

Em `script.js`, linha 3:
```javascript
const whatsappNumber = "5512988872980"; // ← Seu número
```

### 3. Vídeos

Adicione vídeos em `/demos/` antes do upload.

---

## 🐛 Problemas Comuns

### Site não aparece após 5 minutos?

1. ✅ Repositório é **público**?
2. ✅ Branch está correto (main/master)?
3. ✅ Arquivo se chama `index.html`? (não Index.html)
4. ✅ Vá em Actions e veja se há erros

### Páginas não carregam?

- Verifique se caminhos estão corretos:
  ```html
  ❌ <link href="/style.css">
  ✅ <link href="style.css">
  ```

### CSS/JS não funcionam?

- Caminhos relativos devem ser sem `/` no início:
  ```html
  ✅ <script src="script.js"></script>
  ❌ <script src="/script.js"></script>
  ```

---

## 📊 Monitoramento

### Ver Estatísticas

GitHub não fornece analytics nativamente. Opções:

1. **Google Analytics** (gratuito)
   - Adicione código em `index.html` antes de `</head>`

2. **GitHub Insights**
   - Repositório → Insights → Traffic
   - Veja visualizações e clones

---

## 🚀 Próximos Passos

Depois de publicar:

1. ✅ Teste em diferentes dispositivos
2. ✅ Compartilhe nas redes sociais
3. ✅ Adicione URL no WhatsApp Business
4. ✅ Monitore com Google Analytics
5. ✅ Colete feedback e melhore

---

## 📞 Suporte

Problemas com GitHub Pages?

1. [Documentação Oficial](https://docs.github.com/pages)
2. [Fórum GitHub](https://github.community)
3. [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

---

## ✅ Checklist Final

Antes de fazer deploy:

- [ ] Repositório criado no GitHub
- [ ] Todos arquivos enviados
- [ ] GitHub Pages ativado
- [ ] Número do WhatsApp configurado
- [ ] README.md atualizado com sua URL
- [ ] Vídeos adicionados (ou placeholders prontos)
- [ ] Testado localmente
- [ ] .gitignore configurado

---

## 🎉 Pronto!

Seu site estará no ar em:

**`https://SEU-USUARIO.github.io/automax`**

Gratuito, rápido e profissional! 🚀

---

**Dúvidas?** Consulte este guia ou a documentação oficial do GitHub Pages.

**Sucesso com seu site AutoMax!** 🤖✨
