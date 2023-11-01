import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/models/photo.model';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.component.html',
  styleUrls: ['./update-photo.component.css'],
})
export class UpdatePhotoComponent implements OnInit {
  photo: Photo = new Photo();

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.photoService
      .get(this.route.snapshot.params['id'])
      .subscribe((photo) => {
        this.photo = photo;
      });
  }
  updatePhoto() {
    const data = {
      albumId: this.photo.albumId,
      title: this.photo.title,
      url: this.photo.url,
      thumbnailUrl: this.photo.thumbnailUrl,
    };

    this.photoService.update(this.photo?.id, data).subscribe({
      next: (response) => {
        console.log(response);
        this.photoService.getAll();
        this.router.navigate(['/photos', this.photo?.id]);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
