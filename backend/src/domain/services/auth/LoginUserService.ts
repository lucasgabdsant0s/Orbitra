import { IUserRepository } from "../../interfaces/repositories/IUserRepository";
import { IHashProvider } from "../../interfaces/providers/IHashProvider";
import { ITokenProvider } from "../../interfaces/providers/ITokenProvider";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    companyId: string;
  };
  token: string;
}

export class LoginUserService {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
    private tokenProvider: ITokenProvider
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("E-mail ou senha incorretos.");
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.passwordHash || ""
    );

    if (!passwordMatched) {
      throw new Error("E-mail ou senha incorretos.");
    }

    const token = this.tokenProvider.generate({
      sub: user.id!,
      companyId: user.companyId
    });

    return {
      user: {
        id: user.id!,
        name: user.name,
        email: user.email,
        role: user.role,
        companyId: user.companyId,
      },
      token,
    };
  }
}
