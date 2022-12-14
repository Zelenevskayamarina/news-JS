import Loader from './loader';
import { IProcessKey } from '../../types/interface/interface';

class AppLoader extends Loader {
    public apiKey: IProcessKey | undefined;
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: 'ce087d86b8dd47af8686e86df6262ce5',
        }); 
    }
}

export default AppLoader; 
