import { redirect } from '@sveltejs/kit';

function instance() {
  return {
    pay: (origin, amount) => {throw redirect(302, '/build/paypage?amount='+amount)},
  };
}

export default instance();
