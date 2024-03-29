import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    FooterComponent
  ],
})
export class ContactComponent {
  public icon: string = 'contact_mail';
  public title: string = 'Contato';

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  form: UntypedFormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    message: [null, Validators.required],
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  public sendEmail(e: Event) {
    const values = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      message: this.form.get('message')?.value,
    };

    emailjs
      .send('service_4wm78ky', 'template_vd2j1z9', values, '7qePGAIR7YEafwa0H')
      .then(() => {
        this._snackBar.open(
          'E-mail enviado com sucesso, entrarei em contato o mais breve possível!!',
          'Fechar',
          {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
          }
        );
      })
      .catch(() => {
        this._snackBar.open(
          'Ocorreu um erro na hora de enviar seus dados, tente novamente.',
          'Fechar',
          {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
          }
        );
      });
  }
}
