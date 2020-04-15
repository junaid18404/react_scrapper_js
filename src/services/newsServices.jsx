import Services from "./services";

export default class NewsServices extends Services {
    newsUrl = '/r/worldnews/new.json';

    getNewsData() {
        return this.get(this.newsUrl);
    }
}