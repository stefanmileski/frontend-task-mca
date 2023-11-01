import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
})
export class PhotosListComponent implements OnInit {
  photos?: Photo[];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos(): void {
    this.photoService.getAll().subscribe(
      (response) => {
        this.photos = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
