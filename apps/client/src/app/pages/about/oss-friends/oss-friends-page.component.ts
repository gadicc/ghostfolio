import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

const ossFriends = require('../../../../assets/oss-friends.json');

@Component({
  selector: 'gf-oss-friends-page',
  styleUrls: ['./oss-friends-page.scss'],
  templateUrl: './oss-friends-page.html',
  standalone: false
})
export class OpenSourceSoftwareFriendsPageComponent implements OnDestroy {
  public ossFriends = ossFriends.data;

  private unsubscribeSubject = new Subject<void>();

  public ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
