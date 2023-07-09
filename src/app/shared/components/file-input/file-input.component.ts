import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [
    MatButtonModule,
    FlexModule,
    MatIconModule,
  ],
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {
  @Output() fileChanged: EventEmitter<File> = new EventEmitter<File>();
  @Input() requiredFileType: string[] = ["*/*"];

  public fileName: string | undefined;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.fileChanged.emit(file);

    this.fileName = file
      ? file.name
      : undefined;
  }
}
