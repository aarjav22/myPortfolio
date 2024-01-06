import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioProjectSection extends LightningElement {
    githubIcon = PortfolioAssets + '/resource/link.png';

    project1 = 'https://github.com/aarjav22/myPortfolio';
    project2 = 'https://github.com/aarjav22/Handwritten_Digits_Recorgnizer';
}