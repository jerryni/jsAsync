import api from '../dataAPI.js'

async function run(){
  var articles = await api.getArticleList();
  var article = await api.getArticle(articles[0].id);
  var author = await api.getAuthor(article.authorId);
  alert(author.email);  
}

run();
