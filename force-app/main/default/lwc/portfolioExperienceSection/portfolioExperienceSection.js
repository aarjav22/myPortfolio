import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioExperienceSection extends LightningElement {
    company1 = PortfolioAssets + '/resource/Persistent.png';
    company2 = PortfolioAssets + '/resource/Accenture.png';
}