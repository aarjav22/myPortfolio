import { LightningElement,track,api } from 'lwc';

export default class PortfolioBody extends LightningElement {
    @api showAbout = false;
    @api showExperience = false;
    @api showProject = false;
    @api showSkills = false;
    @api showContact = false;
}