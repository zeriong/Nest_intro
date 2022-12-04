import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  //Get데코레이터에서 :id로 불러온이력보다 위에 있어야 의도대로 만들 수 있다. 만약 밑에 있다면 id로 인식해버린다.(익스프레스 & 네스트)
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after : ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    //필요한 것이 있을땐 반드시 요청을 해야한다. @Param()을 통해서 요청을 하고 props로 받는 구조다.
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    //@Body를 사용해서 object형식의 JSON을 추가할 수 있다.
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the ID : ${movieId}`;
  }

  @Patch(':id') //데코레이터 Put과 Patch두가지가 있는데 Put은 모든 리소스를 받아오기 때문에 적합하지 않을 수 있다.
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
