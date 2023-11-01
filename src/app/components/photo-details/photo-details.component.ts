import { Component, Input, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent implements OnInit {
  photo?: Photo;
  submitted = false;

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.photoService
      .get(this.route.snapshot.params['id'])
      .subscribe((photo) => {
        this.photo = photo;
      });
  }

  deletePhoto(): void {
    if (confirm('Are you sure you want to delete this photo?')) {
      this.photoService.delete(this.photo?.id).subscribe(() => {
        this.photoService.getAll();
      });
      this.router.navigate(['/photos']);
    }
  }
}
