import { rest } from 'msw'
import { mockData } from './mockData'

export const handlers = [
  rest.get('/players', async (req, res, ctx) => {
    return res(ctx.json(mockData))
  }),
]