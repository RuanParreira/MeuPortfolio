# 📄 Instruções para Atualização do Currículo

Este arquivo contém o guia passo a passo para manter as informações do seu currículo atualizadas no portfólio.

---

## 🛠️ Como substituir o arquivo de PDF

O arquivo de currículo físico, que os usuários baixam ao clicar no botão "CURRÍCULO" na seção Hero, está localizado em:

- [public/curriculo.pdf](public/curriculo.pdf)

### Passos para atualizar:

1.  Gere o seu novo currículo em formato **PDF**.
2.  Renomeie o arquivo para `curriculo.pdf` (letras minúsculas e sem espaços).
3.  Substitua o arquivo existente na pasta `public/` pelo seu novo arquivo.
4.  O link de download no site será atualizado automaticamente ao fazer o deploy.

---

## ✍️ Como alterar o nome do arquivo baixado

Se você quiser mudar o nome que aparece para o usuário quando ele salva o arquivo (atualmente configurado como "Ruan Gonçalves Parreira.pdf"), você deve editar o componente [src/components/Hero.tsx](src/components/Hero.tsx):

1.  Localize a tag `<motion.a>` que envolve o componente `<Curriculo />`.
2.  Altere o atributo `download="Novo Nome do Arquivo.pdf"`.

---

## 🎨 Como alterar a interface visual do botão

Se você quiser mudar o ícone ou o texto "CURRÍCULO" que aparece na tela:

1.  Vá até o arquivo [src/components/Curriculo.tsx](src/components/Curriculo.tsx).
2.  Você pode alterar o texto dentro da `<div className="text">` ou substituir o código do `<svg>`.

---

## 💡 Dicas Adicionais

- **Compressão:** Antes de subir o PDF para a pasta `public/`, recomenda-se passá-lo por um compressor de PDF (como o iLovePDF) para garantir que o arquivo seja leve (idealmente abaixo de 200KB) e carregue rápido para o usuário.
- **Testes:** Após substituir o arquivo, execute `npm run dev` e clique no botão de currículo para garantir que o download está funcionando corretamente e baixando a versão mais recente.
