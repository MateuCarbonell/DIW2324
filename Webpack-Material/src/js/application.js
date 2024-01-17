// import the jQuery library and assigns it to the variable $ 
import $ from 'jquery';
// import application.scss file from sass folder
import '../sass/application.scss';


// names kittens 
var names = ['Tiger', 'Samuel', 'Leeloo',
  'Bella', 'Mo', 'Sly',
  'Beezy', 'Maple', 'Rodney',
  'Yonce', 'Reginald', 'Winifred'];

// ages kittens
var ages = ['9 Weeks', '12 Weeks', '3 Months',
  '8 Weeks', '1 Year', '15 Weeks',
  '4 Months', '2 Months', '14 Weeks',
  '6 Months', '10 Weeks', '8 Months'];


// This jQuery code looks for "li" elements within elements with the "kittens" class and -> assigns an image -> name and age to each using specific data. 
//The image source is generated using the "placekitten.com" library and the "i" index to get unique images.
$('.kittens').find('.as').each(function (i, el) {
  var img = $(el).find('img');
  var name = $(el).find('.name');
  var age = $(el).find('.age');

  var w = 250;
  var h = 250;

  img.attr('src', 'http://placekitten.com/' + w + '/' + h + '?image=' + i);
  name.text(names[i]);
  age.text(ages[i]);
});
