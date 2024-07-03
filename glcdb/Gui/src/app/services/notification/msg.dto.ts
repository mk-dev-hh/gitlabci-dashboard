export interface NotificationMsg {
  title: string;
  details: string;
  acceptButtonText?: string;
  closeButtonText?: string;
  originalErrorCode?: number;
  meta?: any;
  metaDisplay?: any;
}
