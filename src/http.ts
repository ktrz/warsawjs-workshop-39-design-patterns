import { injectable } from 'inversify'

export interface Http {
  get(url: string): {data: number};
}

@injectable()
export class AxiosHttp implements Http {
  get(url: string): { data: number } {
    // should use axios
    return { data: 5 };
  }

}