import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { mockData } from './mocks/mockData';
import userEvent from '@testing-library/user-event'

const server = setupServer(
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(ctx.json(mockData))
  })
)

beforeAll(async () => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders app', () => {
  render(<App />);
  const title = screen.getByTitle('App');
  expect(title).toBeInTheDocument();
});

test('shows 100 player info cards on screen', async () => {
  render(<App />)
  const players = await screen.findAllByText(/Name/)
  expect(players.length).toEqual(100)
})

test('filter: shows active players when clicking the Active button', async () => {
  render(<App />)
  const activeButton = document.getElementById('activeButton')
  userEvent.click(activeButton)
  const players = await screen.findAllByText(/Name/)
  expect(players.length).toEqual(80)
})

test('filter: shows all players from Pennsylvania (PA) when selecting Pennsylvania from the state dropdown', async () => {
  render(<App />)
  const stateFilter = document.getElementById('stateFilter')
  userEvent.click(stateFilter)
  userEvent.click(screen.getByText('Pennsylvania'))
  const players = await screen.findAllByText(/Name/)
  expect(players.length).toEqual(4)
})

test('filter: shows inactive players from Pennsylvania (PA) when clicking the Inactive button and selecting Pennsylvania from the state dropdown', async () => {
  render(<App />)
  const inactiveButton = document.getElementById('inactiveButton')
  const stateFilter = document.getElementById('stateFilter')
  userEvent.click(inactiveButton)
  userEvent.click(stateFilter)
  userEvent.click(screen.getByText('Pennsylvania'))
  const players = await screen.findAllByText(/Name/)
  expect(players.length).toEqual(1) 
})

test('filter: shows 100 players when clicking the Clear button', async () => {
  render(<App />)
  const activeButton = document.getElementById('activeButton')
  const clearButton = document.getElementById('clearButton')
  userEvent.click(activeButton)
  userEvent.click(clearButton)
  const players = await screen.findAllByText(/Name/)
  expect(players.length).toEqual(100)
})