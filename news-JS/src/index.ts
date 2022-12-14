import './index.scss';
import App from './components/app/app';
import AppLoader from './components/controller/appLoader';
import Controller from './components/controller/controller';
import Loader from './components/controller/loader';
import AppView from './components/view/appView';
import News from './components/view/news/news';
import Sources from './components/view/sources/sources';

const app = new App();
app.start();
