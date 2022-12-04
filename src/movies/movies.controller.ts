import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  /* movies.module.ts에서 @Module을 사용해서 controllers와 providers에서 import시켜주었기 때문에
  constructor(private readonly moviesService: MoviesService)와 같이 타입을 추가하는 것만으로
  같이 사용할 수 있게 되었다. 이것을 dependency injection이라고 한다.
   */

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    //필요한 것이 있을땐 반드시 요청을 해야한다. @Param()을 통해서 요청을 하고 props로 받는 구조다.
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    //@Body를 사용해서 object형식의 JSON을 추가할 수 있다.
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id') //데코레이터 Put과 Patch두가지가 있는데 Put은 모든 리소스를 받아오기 때문에 적합하지 않을 수 있다.
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.update(movieId, updateData);
  }
}
