import ProductFaqsList from '~/components/product-faqs/faqs-list';
import { formatFaqsCollection, MetafieldsQuery } from './_data/component-data';
import { cache } from 'react';

import { client } from '~/client';

const limit = 2;

export const getProductFaqMetafields = cache(
  async (
    productId: number
  ) => {
    const response = await client.fetch({
      document: MetafieldsQuery,
      variables: {
        productId,
        limit,
      },
    });

    const product = response.data.site.product;

    if (!product?.metafields) {
      return { endCursor: null, faqs: [] };
    }

    return formatFaqsCollection(product);
  }
);

const Faqs = async ({ productId }: { productId: number }) => {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await sleep(2000);
  const faqCollection = await getProductFaqMetafields(productId);
  
  
  return Promise.resolve((
    <ProductFaqsList faqCollection={faqCollection} limit={limit} 
      productId={productId} />
  ));
};

export default Faqs;
