import { Request } from 'express';

export type TypedRequest = Request & {
  user: {
    id: number;
    name: string;
    email: string;
  };
};
