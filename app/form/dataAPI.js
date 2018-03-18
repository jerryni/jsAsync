import $ from 'Jquery'

export default {
    getArticleList() {
        return new Promise((resolve, reject) => {
            $.ajax("/data/articles.json").done(result => resolve(result))
        })
    },

    getArticle(id) {
        return new Promise((resolve, reject) => {
            $.ajax("/data/content.json", {
                id:id
            }).done(result => resolve(result))
        })
    },

    getAuthor(id) {
        return new Promise((resolve, reject) => {
            $.ajax("/data/author.json",{
                id:id
            }).done(result => resolve(result))
        })
    }
}