import api from '../dataAPI.js'

api.getArticleList(function(articles){
    api.getArticle(articles[0].id, function(article){
        api.getAuthor(article.authorId, function(author){
            alert(author.email);
        })
    })
})
