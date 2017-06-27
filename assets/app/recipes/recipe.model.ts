export class Recipe {
	name: string;
	imageurl: string;
	id:string;
	username: string;
	materials:string[];

	constructor( name: string, username?:string, id?: string, mat?:string[], imageurl?:string){
		this.name = name;
		this.id = id;
		this.materials = mat;
		this.imageurl = imageurl;
		this.username = username;
	}
}
