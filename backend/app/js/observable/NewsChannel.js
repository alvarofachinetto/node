export class NewsChannel {
    constructor(news) {
        this.news = news;
    }
    update(news) {
        this.setNews(news);
    }
    setNews(news) {
        this.news = news;
    }
    getNews() {
        return this.news;
    }
}
