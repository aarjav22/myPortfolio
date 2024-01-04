import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class BackgroundImage extends LightningElement {
    imageUrl = PortfolioAssets + '/resource/profilePicture.png';

    /*style={getBackgroundImage} 
    get getBackgroundImage(){
        return `background-image:url("${this.imageUrl}")`;
    }*/
}