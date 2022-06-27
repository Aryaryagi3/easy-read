# easy-read
Aplicativo onde usuários poderão ler e escrever livros de forma rápida e fácil.

# Funcionalidades
- O aplicativo recomenda livros para o usuário, mas também pode ser feito a pesquisa por um título específico.
- Ao se interessar por um livro, o aplicativo conta com um sistema onde se adiciona o título de interesse a uma pasta de fácil acesso.
- Detalhes do livro serão apresentados, como: título, autor, gênero, número de capítulos e volumes, e sinopse.
- Escrever e publicar seus próprios livros também é possível.

# Protótipo de telas
https://www.figma.com/proto/3uxJ7Ech4v8ZXiT7U4Bx6I/Untitled?node-id=4%3A3&starting-point-node-id=4%3A3

# Cronograma de desenvolvimento
- AA1 - Será implementado a navegação e a estilização.
- AA2 - Será implementado o sistema de persistência de dados, Alert, Action Sheet e Modal.
- Projeto Final - Serão implementados CRUD pela interface do aplicativo, sistema de likes e notificações, além da conclusão da estilização do app.

# Backlog
- O link agora não da mais acesso negado.
- O projeto foi consertado em conjunto com o professor, agora ele roda.
- Foram feitos atualizações de todos os pacotes do projeto.
- O método de persistência da minha escolha foi o SQLite, ainda não foi implementado métodos para funcionar através da interface do aplicativo.
- Os models a serem armazenados são: Book e Chapter.
- O model Book,além das funções padrões, possui uma função de buscar livros pelo titulo e outro por autor.
- O model Chapter, além das funções padrões, possui uma função de buscar capítulos pelo id de Book.
- O dado book_id do Model chapter não pode ser alterado após sua criação.
- Alert foi utilizado como confirmação quando o usuário tenta adicionar um livro a sua estante.
- Modal foi utilizado para apresentar uma amostra do livro.
- ActionSheet foi utilizado para apresentar as opções acima.

# Acesso a API remota
- Pretendo utilizar a API Outh0, disponível em: https://auth0.com/.
- O login será util para que livros criados por um usúario não possam ser editados e nem deletados por outro.

# Recurso inédito
- Pretendo implementar notificações, junto com um sistema de likes, quando uma pessoa receber um like na obra que criou, uma notificação é enviada a ele.
