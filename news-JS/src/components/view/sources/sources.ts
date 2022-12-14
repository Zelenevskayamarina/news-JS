import './sources.css';
import { DataSourceItemType } from '../../../types/type/type';

class Sources {
    draw(data: DataSourceItemType[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLElement;

        data.forEach((item: DataSourceItemType): void => {
            const source = sourceItemTemp as HTMLTemplateElement;
            const sourceClone = source.content.cloneNode(true) as HTMLElement;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            sourceItemName.textContent = item.name;
            const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources') as HTMLElement;
        sources.append(fragment);
    }
}

export default Sources;
