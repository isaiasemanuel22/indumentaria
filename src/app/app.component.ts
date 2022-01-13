import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'indumentaria';
  faSearch = faSearch;
  lottieConfig: { path: string; renderer: string; autoplay: boolean; loop: boolean; };

  constructor() {
    this.lottieConfig = {
      path: 'assets/confetti.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }



  handleAnimation(response: any) {
    console.log(response);
  }
}
