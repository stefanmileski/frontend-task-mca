import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
})
export class AddPhotoComponent implements OnInit {
  photo: Photo = {
    albumId: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  };
  submitted = false;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {}

  savePhoto(): void {
    const data = {
      albumId: this.photo.albumId,
      title: this.photo.title,
      url: this.photo.url,
      thumbnailUrl: this.photo.thumbnailUrl,
    };

    this.photoService.create(data).subscribe({
      next: (response) => {
        console.log(response);
        this.submitted = true;
        this.photoService.getAll();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  newPhoto(): void {
    this.submitted = false;
    this.photo = {
      albumId: 0,
      title: '',
      url: '',
      thumbnailUrl: '',
    };
  }
}
