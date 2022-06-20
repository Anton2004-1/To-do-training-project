import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PictureDTO } from '../../../application/ports/secondary/picture.dto';

@Component({ selector: 'lib-pictures', templateUrl: './pictures.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class PicturesComponent {
    pictures$: Observable<PictureDTO[]> = of([
        {
            id: '1',
            image: 'https://w0.peakpx.com/wallpaper/654/470/HD-wallpaper-notebook-inscription-words-office-thumbnail.jpg',
        },
        {
            id: '2',
            image: 'https://gdynia-wiadomosci.pl/wp-content/uploads/2022/02/1249-300x157.jpeg',
        },
        {
            id: '3',
            image: 'https://static.tildacdn.com/tild6161-3137-4533-b434-653034643230/student-849822_960_7.jpg',
        }
    ])
}
