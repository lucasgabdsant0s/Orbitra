import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { AppError, ValidationError } from '../../../core/exceptions/index.js';
export function errorHandler(
  error: FastifyError | Error,
  _request: FastifyRequest,
  reply: FastifyReply,
): void {
  if (error instanceof ValidationError) {
    reply.status(error.statusCode).send({
      statusCode: error.statusCode,
      error: 'Validation Error',
      message: error.message,
      errors: error.errors,
    });
    return;
  }
  if (error instanceof AppError) {
    reply.status(error.statusCode).send({
      statusCode: error.statusCode,
      error: error.constructor.name,
      message: error.message,
    });
    return;
  }
  if ('validation' in error && error.validation) {
    reply.status(400).send({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Invalid input data.',
      details: error.validation,
    });
    return;
  }
  console.error('[UNHANDLED ERROR]', error);
  reply.status(500).send({
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'Internal server error. Please try again later.',
  });
}
