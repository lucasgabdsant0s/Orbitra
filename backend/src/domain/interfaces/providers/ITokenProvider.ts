export interface ITokenPayload {
  sub: string;
  companyId: string;
}

export interface ITokenProvider {
  generate(payload: ITokenPayload): string;
  verify(token: string): ITokenPayload;
}
