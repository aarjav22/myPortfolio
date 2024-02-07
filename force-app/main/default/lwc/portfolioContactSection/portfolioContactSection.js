import { LightningElement } from 'lwc';
import createContact from '@salesforce/apex/PortfolioDisbursal.createContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PortfolioContactSection extends LightningElement {
    name = '';
    email = '';
    message = '';

    getName(event){
        this.name = event.target.value;
    }

    getEmail(event){
        this.email = event.target.value;
    }

    getMessage(event){
        this.message = event.target.value;
    }

    createContactRecord(event){
        createContact({ 
            lastName: this.name, 
            email: this.email, 
            description: this.description 
        })
        .then(result => {   
            if(result != 'Success'){
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message : 'Something went Wrong!',
                    varient :'error'
                }));
            }else{
                this.dispatchEvent(new ShowToastEvent({
                    ttitle: 'Success',
                    message : 'Thank You for Connecting..',
                    varient :'success'
                }));
            }
            console.log('Contact created:', result);
        })
        .catch(error => {
            console.error('Error creating contact:', error);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error',
                message : 'Something went Wrong!',
                varient :'error'
            }));
        });
    }
}