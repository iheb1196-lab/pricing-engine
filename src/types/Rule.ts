import { Condition } from './Condition';
import { Operation } from './Operation';

export interface Rule {
  conditions: Condition[];
  operation: Operation;
}