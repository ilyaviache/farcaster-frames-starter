/* eslint-disable react/jsx-key */

import { Button } from 'frames.js/next';
import { cookies } from 'next/headers';

import ExampleService from '@/modules/Example/services/example.service';

import { frames } from './frames';

const handleRequest = frames(async(ctx) => {
  
  // Example of using supabase as a service
  // Set correct .env variables to use Supabase

  // const cookieStore = cookies();
  // const exampleService = new ExampleService(cookieStore);

  // const example = await exampleService.getExample('test_id');

  return {
    image: (
      <span>
        Hello there: {ctx.pressedButton ? '✅' : '❌'}
        {ctx.message?.inputText ? `, Typed: ${ctx.message?.inputText}` : ''}
      </span>
    ),
    buttons: [
      <Button action="post">Click me</Button>,
      <Button action="post" target="/next">
        Next frame
      </Button>
    ],
    textInput: 'Type something!'
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
