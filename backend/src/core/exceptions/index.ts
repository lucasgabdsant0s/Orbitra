export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  constructor(message: string, statusCode = 400, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found.`, 404);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized.') {
    super(message, 401);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}
export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden.') {
    super(message, 403);
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}
export class ConflictError extends AppError {
  constructor(message: string) {
    super(message, 409);
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
}
export class ValidationError extends AppError {
  public readonly errors: Record<string, string[]>;
  constructor(errors: Record<string, string[]>) {
    super('Invalid input data.', 422);
    this.errors = errors;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
export class InviteExpiredError extends AppError {
  constructor() {
    super('Invite has expired or is no longer valid.', 410);
    Object.setPrototypeOf(this, InviteExpiredError.prototype);
  }
}
export class InsufficientPermissionsError extends AppError {
  constructor(message = 'You do not have permission to perform this action.') {
    super(message, 403);
    Object.setPrototypeOf(this, InsufficientPermissionsError.prototype);
  }
}
