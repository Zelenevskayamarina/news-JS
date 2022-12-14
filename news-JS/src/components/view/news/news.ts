import './news.css';
import { IDataItem } from '../../../types/interface/interface';

class News {
    draw(data: IDataItem[]): void  {
        const news = data.length >= 10 ? data.filter((item: IDataItem, index: number) => index < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        news.forEach((item: IDataItem, index: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
            if (index % 2) {
                const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
                newsItem.classList.add('alt');
            }
            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            newsMetaAuthor.textContent = item.author || item.source.name;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            newsMetaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

                const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
                newsDescriptionTitle.textContent = item.title;
                const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
                newsDescriptionSource.textContent = item.source.name;
                const newsDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
                newsDescriptionContent.textContent = item.description;
                const newsDescriptionLink = newsClone.querySelector('.news__read-more a') as HTMLElement;
                newsDescriptionLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContent = document.querySelector('.news') as HTMLElement;
        newsContent.innerHTML = '';
        newsContent.appendChild(fragment);
    }
}

export default News;
