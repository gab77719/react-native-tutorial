# 📚 Resumo - React Native (Simples)

## 📌 Linguagem utilizada

JavaScript (ou TypeScript)

---

## 📌 Node.js

Permite rodar JavaScript fora do navegador (no backend).

---

## 📌 Framework vs Biblioteca

* **Framework**: já define como o projeto deve ser feito
* **Biblioteca**: você usa só quando precisa

👉 Framework manda | Biblioteca você decide

---

## 📌 NPM

Ferramenta para instalar e gerenciar pacotes do Node

---

## 📌 React

Biblioteca para criar telas (interfaces) com componentes

---

## 📌 React Native

Usa React para criar apps mobile (Android e iOS)

---

## 📌 Expo

Facilita criar apps em React Native sem configuração complicada

---

## 📌 Estilização

Usa JavaScript para estilizar:

```js
const styles = {
  container: {
    backgroundColor: '#fff'
  }
}
```

---

## 📌 CSS no React Native

Não é igual ao CSS da web:

* Não usa px
* Algumas coisas não existem
* Usa camelCase (backgroundColor)

---

## 📌 Imagem

```js
import { Image } from 'react-native'
```

---

## 📌 Props

São dados passados para componentes

```js
<CardUser nome="Gab" />
```

---

## 📌 Hooks

Funções do React para controlar coisas do componente

---

## 📌 useState

Guarda e muda valores

```js
const [valor, setValor] = useState(0)
```

---

## 📌 useEffect

Executa algo automaticamente (ex: quando abre a tela)

```js
useEffect(() => {
  console.log('rodou')
}, [])
```

---

## 🚀 Resumo geral

React Native = usar JavaScript para criar apps mobile de forma mais simples
