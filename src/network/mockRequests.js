import { mockProducts } from "../data/mockProducts";

function mockDelay(value) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(value), 250);
  });
}

export function getProducts() {
  return mockDelay({ products: mockProducts });
}

export function sendContactMessage(data) {
  console.info("Mock contact request", data);
  return mockDelay({ ok: true });
}
