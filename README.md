
# SecNewsFeedReader-Drupal
Install latest version of Drupal 8

Install and setup your site.

Install following modules:Automated Logout 8.x-1.0, Token 8.x-1.4, Views Accordion 8.x-1.1, view accordion

Enable modules: Aggregator, Views, Views UI, Taxonomy, view accordion
Create taxonomy, /admin/structure/taxonomy/manage/tags/overview
/admin/config/services/aggregator/fields
--- Add field: taxonomy term
--- label: category
Allowed number of values: unlimited

Import OPML (/admin/config/development/configuration/single/import) as type: view


