import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
//DTO를 만드는이유는 코드를 간결하게 해주고 NestJS가 들어오는 쿼리에 대해 유효성을 검사할 수 있게 도와준다.
