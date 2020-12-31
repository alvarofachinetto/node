export class NewsAgency {
    constructor() {
        this.chanels = new Array();
    }
    /**
     * setNews
     */
    setNews(news) {
        this.news = news;
        this.chanels.forEach(channel => channel.update(this.news));
    }
    addObserver(channel) {
        this.chanels.push(channel);
    }
    removeObserver(channel) {
        var index = this.chanels
            .filter(channelArr => channelArr === channel)
            .indexOf(channel);
        this.chanels.splice(index, 1);
    }
}
