import { IPaymentProcessor } from "../interfaces/IPaymentProcessor";

export class StripePaymentProcessor implements IPaymentProcessor {
  process(amount: number): void {
    console.log(`Stripe processed payment: ${amount}`);
  }
}
