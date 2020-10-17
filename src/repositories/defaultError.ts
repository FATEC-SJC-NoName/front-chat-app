enum DefaultErrorType {
  message,
  chat
}

type DefaultErrorResponse = {
  message: string;
  code: number;
  type: DefaultErrorType;
};

export { DefaultErrorType, DefaultErrorResponse };
