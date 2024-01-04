import { LightningElement,api, wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';

export default class FirstComponent extends LightningElement {
    @api recordId;
    @wire(getRecord,{recordId:'$recordId',fields:['Account.Name', 'Account.Phone']})
    record;
    get name(){
        return getFieldValue(this.record.data,'Account.Name');
    }
    get phone(){
        return getFieldValue(this.record.data,'Account.Phone');
    }
}