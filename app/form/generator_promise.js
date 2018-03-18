import api from '../dataAPI.js'

function* run(){
  var articles = yield api.getArticleList();
  var article = yield api.getArticle(articles[0].id);
  var author = yield api.getAuthor(article.authorId);
  alert(author.email);  
}

// 递归运行generator
function runGenerator(){
    var gen = run();
    
    function go(result){
        if(result.done) return;
        result.value.then(function(r){
            go(gen.next(r));
        });
    }
    
    go(gen.next());
}

runGenerator();
