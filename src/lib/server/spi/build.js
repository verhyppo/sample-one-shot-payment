import { redirect } from "@sveltejs/kit";

function instance() {
  return {
    pay: (origin, amount) => {
      throw redirect(302, "/build/init?amount=" + amount);
    },
  };
}

export default instance();
