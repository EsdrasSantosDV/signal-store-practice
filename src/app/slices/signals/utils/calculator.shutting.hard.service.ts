import { Injectable } from '@angular/core';

export type Operator = '+' | '-' | '*' | '/';
export type Parenthesis = '(' | ')';
export type Token = Operator | Parenthesis | string;
export const precedence: Record<Operator, number> = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
};

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  isOperator(token: string): token is Operator {
    return ['+', '-', '*', '/'].includes(token);
  }

  isParenthesis(token: string): token is Parenthesis {
    return ['(', ')'].includes(token);
  }

  isNumeric(token: string): boolean {
    return !isNaN(parseFloat(token)) && isFinite(parseFloat(token));
  }

  shuntingYard(input: string): string {
    let outputQueue: string = '';
    let operatorStack: Token[] = [];
    let tokens = input.match(/(\d+|\+|\-|\*|\/|\(|\))/g);
    if (!tokens) {
      return '';
    }
    for (let token of tokens) {
      if (this.isNumeric(token)) {
        outputQueue += token + ' ';
      } else if (this.isOperator(token)) {
        while (
          operatorStack.length > 0 &&
          this.isOperator(operatorStack[operatorStack.length - 1]) &&
          precedence[operatorStack[operatorStack.length - 1] as Operator] >=
            precedence[token]
        ) {
          outputQueue += operatorStack.pop() + ' ';
        }
        operatorStack.push(token);
      } else if (token === '(') {
        operatorStack.push(token);
      } else if (token === ')') {
        while (
          operatorStack.length > 0 &&
          operatorStack[operatorStack.length - 1] !== '('
        ) {
          outputQueue += operatorStack.pop() + ' ';
        }
        operatorStack.pop();
      }
    }
    while (operatorStack.length > 0) {
      outputQueue += operatorStack.pop() + ' ';
    }
    return outputQueue.trim();
  }

  evaluatePostfix(expression: string): number {
    let stack: number[] = [];
    let tokens = expression.split(/\s+/);

    for (let token of tokens) {
      if (this.isNumeric(token)) {
        stack.push(parseFloat(token));
      } else {
        let rightOperand = stack.pop();
        let leftOperand = stack.pop();

        if (rightOperand === undefined || leftOperand === undefined) {
          throw new Error('Invalid expression');
        }

        switch (token) {
          case '+':
            stack.push(leftOperand + rightOperand);
            break;
          case '-':
            stack.push(leftOperand - rightOperand);
            break;
          case '*':
            stack.push(leftOperand * rightOperand);
            break;
          case '/':
            stack.push(leftOperand / rightOperand);
            break;
          default:
            throw new Error(`Unsupported operator: ${token}`);
        }
      }
    }

    if (stack.length !== 1) {
      throw new Error('Invalid expression');
    }

    return stack.pop()!;
  }

  calculateExpression(expression: string): number {
    let postfix = this.shuntingYard(expression);
    return this.evaluatePostfix(postfix);
  }


}
