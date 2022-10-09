import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  // Description: This is a GEt request
  //Access : Public
  //URL : http://localhost:3000/coffees

  @Get()
  findAll(@Res() response) {
    response.status(200).send('This action returns all coffees');
  }

  // Description: This is a Get request
  //Access : Public
  //URL : http://localhost:3000/coffees/1

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  // Description: This is a Post request
  //Access : Public
  //URL : http://localhost:3000/coffees

  @Post()
  @HttpCode(201)
  create(@Body() body) {
    return body;
  }

  // Description: This is a Update request
  //Access : Public
  //URL : http://localhost:3000/coffees/1

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  // Description: This is a Delete request
  //Access : Public
  //URL : http://localhost:3000/coffees/1

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
