import api from '../dataAPI.js'

api.getArticleList()
.then(articles => api.getArticle(articles[0].id))
.then(article => api.getAuthor(article.authorId))
.then(author => {
    alert(author.email);
});
