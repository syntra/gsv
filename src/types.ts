export interface CLIError {
  message: string;
  help?: string;
  exit: number;
}

export interface Author {
  name: string;
  email?: string;
  social?: Array<Social>;
}

export interface Social {
  [key: string]: string;
}

export interface GSVRC {
  title: string;
  url: string;
  author: Array<Author>;
  dir?: {
    posts?: string;
    pages?: string;
  };
}

export interface Tag {
  name: string;
  slug: string;
}

export interface Post {
  title: string;
  slug: string;
  date: string;
  author: Author;
  tags: Array<Tag>;
}
