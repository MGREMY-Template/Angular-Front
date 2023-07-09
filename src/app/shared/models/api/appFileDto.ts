export class AppFileDto {
  id: string;
  size: number;
  userId: string;
  mimeType: string;

  constructor(id: string, size: number, userId: string, mimeType: string) {
    this.id = id;
    this.size = size;
    this.userId = userId;
    this.mimeType = mimeType;
  }
}
