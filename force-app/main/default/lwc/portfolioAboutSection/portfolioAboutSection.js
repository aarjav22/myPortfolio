import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class BackgroundImage extends LightningElement {
    imageUrl = PortfolioAssets + '/resource/profilePicture.png';
    twitterIcon = PortfolioAssets + '/resource/twitter.png';
    linkedInIcon = PortfolioAssets + '/resource/linkedin.png';
    instagramIcon = PortfolioAssets + '/resource/instagram.png';

    twitterUrl = 'https://twitter.com/aarjavjain22';
    linkedinUrl = 'https://www.linkedin.com/in/aarjav-jain-004ab8167/';
    instagramUrl = 'https://www.instagram.com/aarjav_jain_22/';
}