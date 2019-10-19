import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

	//les differentes parties du post
	//On crée des propriétés personnalisées pour les modifiés comme attribut de la balise "app-post-list-component" dans le
	//component principal "app.component.html" grace au "property binding"
	@Input() title: string;

	@Input() content: string;

	@Input() created_at: Date;

	//On ne crée pas une propriété personnalisé pour "loveIts" parce que les boutons qui modifient sa valeur ne sont
	//pas globaux
	//C'est la logique de "post-list-component.ts" que les boutons de "post-list-component.html" suivent 
	loveIts: number = 0;

	//Juste pour connaitre le nombre de "love" et de "don't love"
	loveIt = 0;
	dontLoveIt = 0;

  constructor() { }

  ngOnInit() {
  }

  //Méthode appelée quand on clique sur le bouton "Don't love it"
  onDontLoveIt(){
  	this.dontLoveIt = this.dontLoveIt + 1; 
  	this.loveIts = this.loveIts - 1;
  }

  //Méthode appelée quand on clique sur le bouton "Love it"
  onLoveIt(){
  	this.loveIt = this.loveIt + 1;
  	this.loveIts = this.loveIts + 1;
  }
}