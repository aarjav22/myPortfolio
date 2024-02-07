import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioProjectSection extends LightningElement {
    githubIcon = PortfolioAssets + '/resource/github.png';

    project1 = 'https://github.com/aarjav22/myPortfolio';
    project2 = 'https://github.com/aarjav22/Handwritten_Digits_Recorgnizer';
    project3 = 'https://github.com/aarjav22/Gideon-Final-Project';
    project4 = 'https://github.com/aarjav22/Voice-Personal-Assistance';
    project5 = 'https://github.com/aarjav22/Diabetes_Classification';
    project6 = 'https://github.com/aarjav22/Car_Price_Prediction';
}