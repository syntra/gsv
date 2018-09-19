export interface CLIError {
  message: string;
  help?: string;
  exit: number;
}

export interface Author {
  name: string;
  email: string;
  social?: Array<Social>;
}

export interface Social {
  [key: string]: string;
}

export interface GSVRC {
  title: string;
  url: string;
  author: Author;
}
