# key no React

## Por que única?
3 momentos em que um componente é renderizado no React.

1. Quando o estado do compoente altera;
2. Quando a proprieade altera;
3. Quando um componente pai renderiza novamente;

---------
## Por que não usar o ínidce do array?

# Porque ao mudar as posições os índices (id) devem se manter
# O id deve se manter igual, independente de ser atualizado, removido e mudado de ordem
``` js
const posts = [1, 2, 3]
```

# Closures no React
No exemplo abaixo é criado um contexto para cada execução
Abaixo cada fuunção é executada em um estado, ou seja, sempre iniciara zeronução
``` js errado
setLikeCount(likeCount + 1);
setLikeCount(likeCount + 1);
```

``` js correto
setLikeCount(likeCount + 1);
setLikeCount(likeCount + 1);
```

Sempre que for atualizar uma informação e essa informação depende do seu valor anterior, sempre usamos o pdrão abaixo:
``` js correto
setLikeCount((state) =>{
   return state + 1;
});
```