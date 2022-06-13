export enum AlertType {
  SUCCESS = 'success',
  ERROR = 'error',
}

export type AlertData = {
  message: string;
  type: AlertType;
};
