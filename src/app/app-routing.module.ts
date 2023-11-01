import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { UpdatePhotoComponent } from './components/update-photo/update-photo.component';

const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', component: PhotosListComponent },
  { path: 'photos/:id/edit', component: UpdatePhotoComponent },
  { path: 'photos/:id', component: PhotoDetailsComponent },
  { path: 'add', component: AddPhotoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
