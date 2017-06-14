import {Http, Response, Headers} from '@angular/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Rx';

import {Message} from './message.model';

@Injectable()
export class MessageService {
	messages: Message[] = [];

	constructor(private http:Http) {

	}

	addMessage(mes: Message) {
		this.messages.push(mes);
		//creates body to attach to post request
		const body = JSON.stringify(mes);
		const header = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/message', body, {headers:header})
			.map((response: Response) => response.json()) // this map retrieves the body content in json format
			.catch((error: Response) => Observable.throw(error.json()));
	}

	getMessage() {
		return this.http.get('http://localhost:3000/message')
			.map((response: Response) => {
				const messages = response.json().obj;
				let transformedMessages: Message[] = [];
				for(let message of messages) {
					transformedMessages.push(new Message(message.content,"dummy", message.id, null))
				}
				this.messages = transformedMessages;
				return transformedMessages;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}

	deleteMessage(mes: Message) {
		this.messages.splice(this.messages.indexOf(mes), 1);
	}
}