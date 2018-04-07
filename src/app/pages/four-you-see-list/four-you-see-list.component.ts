import { Component, OnInit } from '@angular/core';
import { FourYouSeeService } from '../../services/four-you-see.service';
import { MediaData } from '../../model/media-data';

@Component({
  selector: 'app-four-you-see-list',
  templateUrl: './four-you-see-list.component.html',
  styleUrls: ['./four-you-see-list.component.css']
})
export class FourYouSeeListComponent implements OnInit {

  public mediaDataList: Array<MediaData>;

  constructor(private fourYouSeeService: FourYouSeeService) { 
    this.mediaDataList = new Array<MediaData>();
    
  }

  ngOnInit() {
      this.listAllMediaData();
  }

  public listAllMediaData(){
    this.fourYouSeeService.getListOfAllMediaData().subscribe( 
      ( response ) => {
       this.mediaDataList = response;
    });
 }

 public isImage(media: any): boolean{
    return media.type == 'image' || media.type == 'rss';
 }

}
