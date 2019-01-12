import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';

@Component({
  selector: 'd-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.scss']
})
export class InstaFeedComponent implements OnInit {

  constructor(private homeService: HomeService) {

  }

  ngOnInit() {
    this.getInstaInfo();
  }

  instaInfo:InstaInfo[];

  getInstaInfo(){
    this.homeService.getDataFromInsta()
      .subscribe(
        () => {
        },
        (err) => {
          let data = err.split('window._sharedData = ');
          data = data[1].split('<\/script>');
          data = data[0];
          data = data.substr(0, data.length - 1);
          data = JSON.parse(data);
          data = data.entry_data.ProfilePage[0].graphql.user;
          this.convertRawDataToInstaInfo(data,3);
        }
      );
  }

  convertRawDataToInstaInfo(rawData:any,postNumber:number){
    this.instaInfo=[];
    let posts= rawData.edge_owner_to_timeline_media.edges;
    for(let p of posts){
      this.instaInfo.push({
        likeNumbers:p.node.edge_liked_by.count,
        caption:p.node.edge_media_to_caption.edges[0].node.text.split('.\n')[1],
        isItVideo:p.node.is_video,
        thumbnail:p.node.display_url,
        shortCode:p.node.shortcode
      })
    }
    this.instaInfo=this.instaInfo.slice(0,postNumber);
  }

}

interface InstaInfo {
  thumbnail:string;
  likeNumbers:number;
  isItVideo:boolean;
  caption:string;
  shortCode:string;
}
