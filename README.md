# Tópicos Importantes

- Qual a linguagem de programação utilizada na disciplina?
Javascript ou Typescript.

- O que é o Node?
Forma de rodar o javascript no navegador.

- O que é Framework e qual a diferença para uma biblioteca?
Framework é uma estrutura que define como seu código deve ser utilizado e e biblioteca é um conjunto
de funções que você chama como quiser (num import por exemplo).

- O que é o NPM?
O NPM é nada mais nada menos do que o gerenciador de pacotes do Node.js, onde você 
instala, atualiza e gerencia bibliotecas do seu projeto.

- O que é React?
O react é uma biblioteca do javascript usada para criar interfaces num projeto WEB.

- O que é o React Native?
É um framework que permite criar aplicativos mobile, usando o javascript + react.

- O que é o Expo?
O expo é uma ferramenta que facilita criar apps com o react native, exigindo pouca configuração.

- Como estilizar um componente no React Native?
Não utiliza css normal, usa o js com Stylesheet; Os nomes dos estilos são em CamelCase; 
div vira VIEW; p,H1 vira Text.

- O estilo CSS in JS no React Native é igual ao CSS Web? Tenho todas as propriedades?
Não é igual ao CSS web, não tem todas as propriedades, usa Flexbox como base e o estilo é js (camelCase, sem px).

- Em quais pacotes encontro um componente de Imagem? Qual melhor para usarmos atualmente?
Padrão do React Native: import { Image } from 'react-native';
Padrão Expo: import { Image } from 'expo-image';

- O que são propriedades de componentes?
As props são valores que você passa para um componente para configurar como ele vai funcionar ou aparecer.

- O que são Hooks?
Hooks são funções do react que permitem dar estado e outras funcionalidades para um componente. Agindo como se fosse um "poder extra" para esse componente.

- Para que serve e como funciona o useState?
O useState cria estado e atualiza a interface automaticamente, retornando um [valor, funcaoDeAtualizar]

- Para que serve e como funciona o useEffect?
O useEffect roda um código quando algo aparece ou quando a tela carrega (efeito depois da renderização).

- O que é Prop Drilling?
Técnica do react onde um componente pai passa uma ou mais propriedades para o componente filho.

Extra

- Variáveis e Objetos
- Desestruturação de objetos
- Arrays
- Condição Ternária 

## Comandos Uteis

// Como instalar o React Native com Expo?

npx create-expo-app@latest --template

### Expo
