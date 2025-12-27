import { Request } from 'express';

export type TypedRequest = Request & {
  user: {
    name: string;
    email: string;
  };
};
