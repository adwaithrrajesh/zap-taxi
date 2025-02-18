import "jest-extended"; // Extends Jest matchers

// Mock console logs to keep test output clean
global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};