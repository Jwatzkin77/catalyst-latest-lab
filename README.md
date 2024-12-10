# Catalyst Essentials

This Catalyst project supports the lab work for BigCommerce Catalyst Essentials.

## Prerequisites

* Node.js 20 or later

## Getting Started

Copy the _starter_ branch.

```shell
npx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-faqs/tree/starter /path/to/working/directory
```

### Product FAQs

Custom query/component to load "FAQs" on product detail page.

Requires metafields on a product matching the following details:

* `namespace`: "FAQ"
* `permission`: "read_and_sf_access"
* `value`: JSON string matching the following schema:

```json
{
  "question": "Question string",
  "answer": "Answer string"
}
```

## Labs

### Lab 1

[Completed Lab 1 state](https://github.com/bigcommerce-edu/lab-catalyst-faqs/tree/lab-basic-faqs-complete)

* [Step 1: Add placeholder to product page](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/starter...lab-basic-faqs-01?diff=split)
* [Step 2: Fetch FAQ metafields](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-basic-faqs-01...lab-basic-faqs-02?diff=split)
* [Step 3: Basic FAQ display](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-basic-faqs-02...lab-basic-faqs-03?diff=split)

[Full Lab 1 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/starter...lab-basic-faqs-complete?diff=split)

### Lab 2

Fresh setup:

```shell
npx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-faqs/tree/lab-faq-enhancements-start /path/to/working/directory
```

[Completed Lab 2 state](https://github.com/bigcommerce-edu/lab-catalyst-faqs/tree/lab-faq-enhancements-complete)

* [Step 2: Add Accordion UI](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-start...lab-faq-enhancements-02?diff=split)
* [Step 3: Load More button](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-02...lab-faq-enhancements-03?diff=split)
* [Step 4: Data fetch for Load More](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-03...lab-faq-enhancements-04?diff=split)
* [Step 5: Loading state for initial FAQs](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-04...lab-faq-enhancements-05?diff=split)
* [Step 6: Loading state for Load More](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-05...lab-faq-enhancements-06?diff=split)
* [Step 7: Error handling](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-06...lab-faq-enhancements-07?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-catalyst-faqs/compare/lab-faq-enhancements-start...lab-faq-enhancements-complete?diff=split)

### Finished State

Set up with all features complete:

```shell
npx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-faqs/tree/lab-faq-enhancements-complete /path/to/working/directory
```
