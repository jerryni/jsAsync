import $ from 'Jquery'

function getAuthor(id, callback){
    $.ajax("/data/author.json",{
        author: id
    }).done(function(result){
        console.log('author data:', result)
        callback(result);
    })
}

function getArticle(id, callback){
    $.ajax("/data/content.json",{
        id: id
    }).done(function(result){
        console.log('content data:', result)
        callback(result);
    })
}

function getArticleList(callback){
    $.ajax("/data/articles.json")
    .done(function(result){
        console.log('articles data:', result)
        callback(result);
    });
}

getArticleList(function(articles){
    getArticle(articles[0].id, function(article){
        getAuthor(article.authorId, function(author){
            alert(author.email);
        })
    })
})