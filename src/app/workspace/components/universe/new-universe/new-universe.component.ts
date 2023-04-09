import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Universe } from 'src/app/models/universe.models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'la-new-universe',
  templateUrl: './new-universe.component.html',
  styleUrls: ['./new-universe.component.scss'],
})
export class NewUniverseComponent {
  universeForm: UntypedFormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private router: Router
  ) {
    this.universeForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control(''),
    });
  }

  submitForm(): void {
    if (this.universeForm.valid) {
      this.http
        .post<Universe>('universes', this.universeForm.value)
        .subscribe(({ id }) => {
          this.router.navigate(['workspace', id]);
        });
    }
  }
}
