import type { Request, Response } from 'express';

import CategoryRepository from '../repositories/CategoryRepository';
import isValidUUID from '../utils/isValidUUID';

class CategoryController {
  async index(request: Request, response: Response) {
    const { orderBy } = request.params;
    const categories = await CategoryRepository.findAll(orderBy);
    response.json(categories);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);

    if (!category) {
      response.status(404).json({ error: 'Category not found' });
      return;
    }

    response.json(category);
  }

  async store(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      response.status(400).json({ error: 'Name is required' });
      return;
    }

    const categoryExists = await CategoryRepository.findByName(name);

    if (categoryExists) {
      response.status(400).json({ error: 'This category already exists' });
      return;
    }

    const category = await CategoryRepository.create(name);
    response.status(201).json(category);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;
    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      response.status(404).json({ error: 'Category not found' });
      return;
    }

    const category = await CategoryRepository.update(id, name);
    response.json(category);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      response.status(400).json({ error: 'Invalid contact id' });
      return;
    }

    await CategoryRepository.delete(id);
    response.sendStatus(204);
  }
}

export default new CategoryController();
