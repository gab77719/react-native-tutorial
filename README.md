# 📚 Resumo - React Native

## 📌 Linguagem utilizada

JavaScript (ou TypeScript)

---

## 📌 Node.js

Ambiente que permite executar JavaScript fora do navegador (backend).

---

## 📌 Framework vs Biblioteca

* **Framework**: dita a estrutura do projeto
* **Biblioteca**: você usa quando quiser

👉 Framework controla você | Biblioteca você controla

---

## 📌 NPM

Gerenciador de pacotes do Node.js

Funções:

* Instalar dependências
* Gerenciar pacotes
* Rodar scripts

---

## 📌 React

Biblioteca JavaScript para criação de interfaces (UI) baseada em componentes.

---

## 📌 React Native

Permite criar aplicativos mobile (Android/iOS) usando JavaScript.

---

## 📌 Expo

Ferramenta que facilita o uso do React Native sem configurações complexas.

---

## 📌 Estilização no React Native

Utiliza **StyleSheet (CSS in JS)**:

```js
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  }
})
```

---

## 📌 CSS no React Native

Não é igual ao CSS tradicional:

* Não usa `px`, `em`
* Nem todas propriedades existem
* Usa camelCase

---

## 📌 Componente de Imagem

```js
import { Image } from 'react-native'
```

👉 Recomendado: `Image` padrão ou `expo-image`

---

## 📌 Props (Propriedades)

Dados passados para componentes:

```js
<CardUser nome="Gab" email="gab@email.com" />
```

---

## 📌 Hooks

Funções do React para controlar estado e ciclo de vida.

Exemplos:

* useState
* useEffect

---

## 📌 useState

Controla estado do componente:

```js
const [contador, setContador] = useState(0)
```

* contador: valor atual
* setContador: atualiza o valor

---

## 📌 useEffect

Executa efeitos colaterais:

```js
useEffect(() => {
  console.log('executou')
}, [])
```

* `[]` executa apenas na montagem

---

## 🚀 Resumo Geral

React Native usa JavaScript para criar apps mobile, com componentes, props e hooks como base do desenvolvimento.
