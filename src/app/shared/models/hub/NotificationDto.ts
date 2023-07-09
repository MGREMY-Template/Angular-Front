export class NotificationDto {
  title?: string;
  content: string;

  constructor(content: string, title?: string) {
    this.content = content;
    this.title = title;
  }
}
