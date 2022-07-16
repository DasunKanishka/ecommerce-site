import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import products from './products';
import banners from './banners';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([products, banners]),
});
