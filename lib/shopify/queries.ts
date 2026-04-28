/* ── Fragments ── */
const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    title
    handle
    description
    tags
    featuredImage { url altText width height }
    images(first: 5) { edges { node { url altText width height } } }
    priceRange {
      minVariantPrice { amount currencyCode }
      maxVariantPrice { amount currencyCode }
    }
    variants(first: 10) {
      edges {
        node {
          id title availableForSale
          price { amount currencyCode }
          selectedOptions { name value }
        }
      }
    }
    collections(first: 3) { edges { node { handle title } } }
    metafield(namespace: "miraa", key: "badge") { value }
  }
`

/* ── Queries ── */
export const GET_PRODUCTS = `
  ${PRODUCT_FRAGMENT}
  query GetProducts($first: Int!, $after: String, $query: String) {
    products(first: $first, after: $after, query: $query) {
      edges { node { ...ProductFields } cursor }
      pageInfo { hasNextPage endCursor }
    }
  }
`

export const GET_PRODUCT_BY_HANDLE = `
  ${PRODUCT_FRAGMENT}
  query GetProduct($handle: String!) {
    product(handle: $handle) { ...ProductFields descriptionHtml }
  }
`

export const GET_COLLECTION_PRODUCTS = `
  ${PRODUCT_FRAGMENT}
  query GetCollection($handle: String!, $first: Int!) {
    collection(handle: $handle) {
      title
      products(first: $first) {
        edges { node { ...ProductFields } }
      }
    }
  }
`

/* ── Cart Mutations ── */
const CART_FRAGMENT = `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      totalAmount { amount currencyCode }
      subtotalAmount { amount currencyCode }
    }
    lines(first: 50) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              price { amount currencyCode }
              product { title handle }
              image { url altText }
            }
          }
        }
      }
    }
  }
`

export const CART_CREATE = `
  ${CART_FRAGMENT}
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`

export const CART_LINES_ADD = `
  ${CART_FRAGMENT}
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`

export const CART_LINES_REMOVE = `
  ${CART_FRAGMENT}
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`

export const CART_LINES_UPDATE = `
  ${CART_FRAGMENT}
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`
