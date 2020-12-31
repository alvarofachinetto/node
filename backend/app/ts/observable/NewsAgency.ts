import { IChannel } from "./Chanel";
import { NewsChannel } from "./NewsChannel";

export class NewsAgency{
    private news: string;
    private chanels = new Array<IChannel>();

    /**
     * setNews
     */
    setNews(news: string) {
        this.news = news;
        this.chanels.forEach(channel => channel.update(this.news));
    }
    
    addObserver(channel: IChannel){
        this.chanels.push(channel);
    }

    removeObserver(channel: IChannel){
        var index = this.chanels
                    .filter(channelArr => channelArr === channel)
                    .indexOf(channel);

        this.chanels.splice(index, 1);
    }
    
}