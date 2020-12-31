import { IChannel } from "./Chanel";

export class NewsChannel implements IChannel{
    
    private news: string;

    constructor(news: string){
        this.news = news;
    }

    update(news: Object): void {
        this.setNews(news as string);
    }

    setNews(news: string){
        this.news = news; 
    }

    getNews(){
        return this.news;
    }

}