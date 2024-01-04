import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioFooter extends LightningElement {
    twitterIcon = PortfolioAssets + '/resource/twitter.png';
    linkedInIcon = PortfolioAssets + '/resource/linkedin.png';
    githubIcon = PortfolioAssets + '/resource/github.png';
    instagramIcon = PortfolioAssets + '/resource/instagram.png';
    trailheadIcon = PortfolioAssets + '/resource/salesforce.png';
    leetcodeIcon = PortfolioAssets + '/resource/leetcode.png';
    hackerrankIcon = PortfolioAssets + '/resource/hackerrank.png';

    twitterUrl = 'https://twitter.com/aarjavjain22';
    linkedinUrl = 'https://www.linkedin.com/in/aarjav-jain-004ab8167/';
    githubUrl = 'https://github.com/aarjav22';
    instagramUrl = 'https://www.instagram.com/aarjav_jain_22/';
    trailheadUrl = 'https://www.salesforce.com/trailblazer/aarjav1999';
    leetcodeUrl = 'https://leetcode.com/aarjav_22/';
    hackerrankUrl = 'https://www.hackerrank.com/profile/aarjavjain';

}