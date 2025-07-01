# Garantia de Aparelhos com Camunda

Este projeto simula um fluxo de solicitação de **garantia de aparelhos eletrônicos**, utilizando modelagem de processos em **BPMN** e regras de negócio com **DMN**.

---

## 📌 Objetivo

Automatizar o processo de garantia, desde a solicitação inicial até a análise técnica, tomada de decisão entre reparo ou troca e encerramento do atendimento.

---

## 🛠️ Tecnologias Utilizadas

- [Camunda Modeler](https://camunda.com/download/modeler/)
- BPMN 2.0
- DMN
- JavaScript (scripts internos)

---

## 📂 Estrutura do Projeto

| Arquivo BPMN                      | Descrição                                  |
|-----------------------------------|--------------------------------------------|
| `solicitacao-garantia-aparelhos`  | Fluxo principal de entrada da solicitação  |
| `obter-informacoes-cliente`       | Subprocesso para captação de dados         |
| `regras-basicas`                  | Processo auxiliar com validações simples   |
| `analise-tecnica`                 | Processo de análise e decisão da garantia  |
| `reparo-reposicao`                | Processo de execução da solução            |


| Arquivo DMN                      | Descrição                                  |
|----------------------------------|--------------------------------------------|
| `verifica-aparelho-elegivel.dmn` | Regras de elegibilidade de garantia        |
| `analise-tecnica-automatica.dmn` | Avaliação técnica automatizada             |

---

## 🔄 Fluxo Geral

1. Cliente solicita garantia
2. Sistema coleta dados do aparelho e cliente
3. Avaliação automática da elegibilidade
4. Análise técnica manual ou automatizada
5. Tomada de decisão: **Reparo ou Troca**
6. Encerramento da solicitação

---

## ✅ Regras implementadas

- Validação de dados do cliente
- Verificação de prazo da garantia
- Checagem de defeitos cobertos
- Análise técnica automatizada com base em tipo de defeito
- Escolha entre reparo ou troca conforme critérios técnicos

---

## 📈 Melhorias Futuras

- Integração com API de cliente (simulação REST)
- Interface de front-end para submissão de solicitações

---

## 🧪 Dados Utilizados

### 📊 Planilha
[📁 planilha_clientes_defeitos.xlsx](https://github.com/user-attachments/files/21008619/planilha_clientes_defeitos.xlsx)

### 📦 Estrutura de Dados (JSON de Exemplo)

```json
{
  "variables": {
    "beneficioSolicitado": {
      "type": "Json",
      "value": "{ \"nome\": \"Alici\", \"cpf\": \"123.456.789-10\", \"dataNascimento\": \"19/05/2002\", \"celular\": { \"ddd\": \"24\", \"numero\": \"98888-8888\" }, \"infoAparelho\": {  \"marca\": \"Samsung\", \"modelo\": \"Galaxy S21\", \"notaFiscal\": \"123.456.789\", \"dataCompra\": \"21/12/2024\", \"tipoDefeito\": \"Porta USB danificada\", \"descricao\": \"Caiu\" } }"
    }
  }
}




