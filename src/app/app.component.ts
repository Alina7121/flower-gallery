import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'photo-gallery';
  galleryInfo: any = {
    //studentNumber: '100799398'
};
currentIndex: number = 0; 
images:any[ ]= [
  {
    path:"./assets/images/peonies.jpg",
    alt:"These are peonies",
    caption: "Peonies on black background"
  },
  {
    path:"./assets/images/aster.jpg",
    alt:"This is an aster",
    caption: "Aster flower in bloom"
  },
  {
    path:"./assets/images/chamomile.jpg",
    alt:"This is a chamomile",
    caption: "Chamomile flower in bloom"
  },
  {
    path:"./assets/images/Chrysanthemum.jpg",
    alt:"These are chrysanthemums",
    caption: "Long lasting chrysanthemums"
  },
  {
    path:"./assets/images/dahlia.jpg",
    alt:"These are dahlias",
    caption: "These are dahlias"
  },
  {
    path:"./assets/images/lily.jpg",
    alt:"These are lilies",
    caption: "Aromatic lilies"
  },
  {
    path:"./assets/images/orchid.jpg",
    alt:"This is orchid",
    caption: "Orchid on black background"
  },
  {
    path:"./assets/images/roses.jpg",
    alt:"These are roses",
    caption: "Red roses for love"
  },
  {
    path:"./assets/images/violet.jpg",
    alt:"These are violets",
    caption: "Violets are in bloom"
  },
  {
    path:"./assets/images/orchid2.jpg",
    alt:"This is orchid",
    caption: "Orchids are blooming"
  }
,
{
  path:"./assets/images/tulips2.jpg",
  alt:"These are tulips",
  caption: "Colorful tulips"
},
{
  path:"./assets/images/lavender.jpg",
  alt:"Lavender field",
  caption: "Lavender field"
}

]
prevImage() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}

nextImage() {
  if (this.currentIndex < this.images.length - 1) {
    this.currentIndex++;
  }
}
isBackDisabled(){
 return this.currentIndex===0;
}

 

changeMainImage(index: number) {
  this.currentIndex = index;
}

ngOnInit() {

}
}
