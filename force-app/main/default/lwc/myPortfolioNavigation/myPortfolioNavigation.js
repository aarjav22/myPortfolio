import { LightningElement, track } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class MyPortfolioNavigation extends LightningElement {
    navicon = PortfolioAssets + '/resource/navbar.png';
    flag = true;

    handleOnClickEvent(event){
        event.preventDefault();
        const href = event.currentTarget.dataset.id;
        console.log("href",href);
        this.dispatchEvent(new CustomEvent('navigationhandle',{
            detail : href
        }));
        this.changeNavigation();
    }

   changeNavigation(){
        if(this.flag == true){
            this.navicon = PortfolioAssets + '/resource/x.png';
            this.flag = false;
        }else{
            this.navicon = PortfolioAssets + '/resource/navbar.png';
            this.flag = true;
        }
        const togglebtn = this.template.querySelector('.togglebtn');
        const dropDownMenu = this.template.querySelector('.dropdown');
        dropDownMenu.classList.toggle('open');
    }
}