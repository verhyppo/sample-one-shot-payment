import hpp from "$lib/server/spi/hpp";
import pbl from "$lib/server/spi/pbl";
import build from "$lib/server/spi/build";

export default () => {
  return {
    build: (origin, amount) => build.pay(origin, amount),
    pay: (origin, amount) => hpp.pay(origin, amount),
    pbl: (origin, amount) => pbl.pay(origin, amount),
  };
};
