import { Clock } from "./clock";
import { ClockFactory } from "./clock-factory";

/**
 * Abstract Factory
 * Creation pattern
 * Purpose: To provide an interface for creating a family of objects related and dependent without specifying its concrete class.
 * Usage: Use the abstract factory design pattern when:
 *   a system should be independent of how its are created components or products.
 *   a system should be configurable with one of several families interchangeable products.
 *   a family of related products should not be mixed with similar products from different families.
 *   only the interfaces of the products are exposed, while the implementation of the products is not disclosed.
 */
class Client {
  main() {
    let clock: Clock;
    clock = ClockFactory.createClock(ClockFactory.ARGENTINA_CLOCK);
    console.log(`Argentina Time: ${clock.getTime()}`);

    clock = ClockFactory.createClock(ClockFactory.MEXICO_CLOCK);
    console.log(`Mexico Time: ${clock.getTime()}`);
  }
}

const c = new Client();
c.main();
