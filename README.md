# SecNewsFeedReader-Drupal
1.)Install most recent version of Drupal 8 ( https://www.drupal.org/project/drupal/releases) 
2.)  Install following modules:Automated Logout,token, Views Accordion, webform, views_bulk_operations, views_accordion, Taxonomy Menu
3.) Enable modules: Aggregator, Views, Views UI, Taxonomy, Taxonomy Menu
4.) Import OPML (/admin/config/services/aggregator)
5.) /admin/config/services/aggregator/settings ; 
-- set 'Discard items older than' to '1 week'
-- Update allowed tags from '<a> <b> <br> <dd> <dl> <dt> <em> <i> <li> <ol> <p> <strong> <u> <ul>' 
  to 
-- Update allowed tags from '<a> <b> <br> <dd> <dl> <dt> <em> <i> <li> <ol> <p> <strong> <u> <ul><img>
  - Save configuration

