export class Recipe {
	name: string;
	imageurl: string;
	id:string;
	username: string;

	constructor( name: string, username?:string, id?: string, imageurl?:string){
		this.name = name;
		this.id = id;
		this.imageurl = imageurl;
		this.username = username;
	}
}
