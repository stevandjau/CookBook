import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Message } from './message.model';
import { MessageService } from './message.service';


@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
    styles: [`
    	.author {
    		display:inline-block;
    		font-size: italic;
    		width:80%
    	}
    	.config {
    		display: inline-block;
    		text-allign: right;
    		width: 19%
    	}
    `]
})
export class MessageComponent{
	@Input() message: Message;
	@Output() editClicked = new EventEmitter<string>();

	constructor(private messageservice:MessageService) {}

	onEdit() {
		this.editClicked.emit('new value');
	}

	onDelete() {
		this.messageservice.deleteMessage(this.message);
	}
}